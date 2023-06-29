import { Node } from "./interface";


export const data: Node = {
    value: "root",
    label: "root",
    isSelected: false,
    isDisabled: false,
    isCollapsed: false,
    children: [
        {
            label: "Level A1",
            value: "Level A1",
            isSelected: false,
            isDisabled: false,
            isCollapsed: false,
            children: [
                {
                    label: "Level B1",
                    value: "Level B1",
                    isSelected: false,
                    isDisabled: false,
                    isCollapsed: false,
                    children: [
                        {
                            label: "Level C1",
                            value: "Level C1",
                            isSelected: false,
                            isDisabled: true,
                            isCollapsed: false,
                            children: [
                                {
                                    label: "Level D1",
                                    value: "Level D1",
                                    isSelected: false,
                                    isDisabled: false,
                                    isCollapsed: false,
                                    children: []
                                }
                            ]
                        }
                    ]  
                },
                {
                    label: "Level B2",
                    value: "Level B2",
                    isSelected: false,
                    isDisabled: false,
                    isCollapsed: false,
                    children: [
                        {
                            label: "Level C2",
                            value: "Level C2",
                            isSelected: false,
                            isDisabled: false,
                            isCollapsed: false,
                            children: [
                                {
                                    label: "Level D2",
                                    value: "Level D2",
                                    isSelected: false,
                                    isDisabled: false,
                                    isCollapsed: false,
                                    children: []
                                }
                            ]
                        }
                    ]  
                }
            ]
        },
        {
            label: "Level A2",
            value: "Level A2",
            isSelected: false,
            isDisabled: false,
            isCollapsed: false,
            children: [
                {
                    label: "Level X1",
                    value: "Level X1",
                    isSelected: false,
                    isDisabled: false,
                    isCollapsed: false,
                    children: [
                        {
                            label: "Level Y1",
                            value: "Level Y1",
                            isSelected: false,
                            isDisabled: false,
                            isCollapsed: false,
                            children: [
                                {
                                    label: "Level Z1",
                                    value: "Level Z1",
                                    isSelected: false,
                                    isDisabled: false,
                                    isCollapsed: false,
                                    children: []
                                }
                            ]
                        }
                    ]  
                },
                {
                    label: "Level X2",
                    value: "Level X2",
                    isSelected: false,
                    isDisabled: false,
                    isCollapsed: false,
                    children: [
                        {
                            label: "Level Y2",
                            value: "Level Y2",
                            isSelected: false,
                            isDisabled: false,
                            isCollapsed: false,
                            children: [
                                {
                                    label: "Level Z2",
                                    value: "Level Z2",
                                    isSelected: false,
                                    isDisabled: false,
                                    isCollapsed: false,
                                    children: []
                                }
                            ]
                        }
                    ]  
                }
            ]
        }

    ]
}
