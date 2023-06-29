import { Node } from "./interface";

export const traverseAndToggleNode = (data: Node[], value: string, key: "isSelected" | "isDisabled" | "isCollapsed" = "isSelected") => {
    let toggled = false;

    if (data) {
        data.forEach((node) => {
            if (node.value === value) {
                node[key] = !node[key];
                toggled = true
            }
        });

        if (!toggled) {
            for (let i = 0; i < data.length; i++) {
                const node = data[i];
                const { data: newChildren, toggled} = traverseAndToggleNode(node.children, value);
                if (toggled) {
                    node.children = newChildren;
                    break;
                }
            }
        }
    }
    return {data, toggled};
}

export const toggleNodeSelected = (value: string, setData: any): void => {
    setData((data: Node) => {
        const {data: newChildren, toggled} = traverseAndToggleNode(data.children, value);
        const newData = {...data, children: newChildren};
        return newData;
    })
}

export const selectAllChildren = (node: Node, value: boolean) => {
    let flat: Node[] = getFlattedChildren(node);

    flat.forEach((child: Node) => {
        child.isSelected = value;
    });
}

export const traverseAndToggleNodeChildren = (data: Node[], value: string) => {
    let toggled = false;
    data.forEach((node) => {
        if (node.value === value) {
            toggled = true;
            let newValue = true;

            // If all selected, change them to false
            if (isAllSelected(node)) {
                newValue = false;
            }

            node.isSelected = newValue;
            selectAllChildren(node, newValue);
        }
    });

    if (!toggled) {
        for (let i = 0; i < data.length; i++) {
            let node = data[i];
            const {data: newChildren, toggled} = traverseAndToggleNodeChildren(node.children, value);
            node.children = newChildren;
            if (toggled) {
                break;
            }
        }
    }

    return {data, toggled};
}

export const toggleAllChildren = (value: string, setData: any) => {
    setData((data: Node) => {
        const {data: newChildren} = traverseAndToggleNodeChildren(data.children, value);
        const newData = {...data, children: newChildren};
        return newData;
    })
}

export const getSelectedValues = (data: Node[]): string[] => {
    return [];
}

export const isAllSelected = (node: Node) => {
    let allSelected = true;

    let flat: Node[] = getFlattedChildren(node);

    flat.forEach((child: Node) => {
        if (!child.isSelected) {
            allSelected = false;
        }
    });

    return allSelected;
}

export const getFlattedChildren = (node: Node): Node[] => {
    let flat = [node];

    node.children.forEach((child) => {
        flat = [...flat, ...getFlattedChildren(child)];
    })

    return flat;
}