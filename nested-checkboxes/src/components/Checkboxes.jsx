import { checkboxesData } from "../data";

const Checkboxes = ({ data, checked, setChecked }) => {
    
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      // Update all children recursively
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          updateChildren(child);
        });
      };

      updateChildren(node);

      // Recursively verify and update parent checked state based on children
      const updateParents = (node, parentMap) => {
        const parent = parentMap.get(node.id);
        if (!parent) return;

        const allChildrenChecked = parent.children.every(
          (child) => newState[child.id]
        );

        newState[parent.id] = allChildrenChecked;

        updateParents(parent, parentMap);
      };

      // Build parent map
      const parentMap = new Map();
      const buildParentMap = (nodes, parent = null) => {
        nodes.forEach((n) => {
          if (parent) parentMap.set(n.id, parent);
          if (n.children) buildParentMap(n.children, n);
        });
      };
      buildParentMap(checkboxesData);

      // Start from the changed node, walk up to update parents
      updateParents(node, parentMap);

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
