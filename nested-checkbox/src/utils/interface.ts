export interface Node {
    label: string,
    value: string,
    isSelected: boolean,
    isDisabled: boolean,
    isCollapsed: boolean,
    children: Node[]
}