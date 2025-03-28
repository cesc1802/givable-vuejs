// eslint-plugin-custom/require-on-handle-callbacks.js

/**
 * Enforces that:
 * 1) Callback prop names start with `on*`.
 * 2) The function variable they reference starts with `handle*`.
 */
export default {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Event callback props must be named onXxx and their handler must be named handleXxx.',
            recommended: false,
        },
        messages: {
            invalidPropName: "Callback prop '{{propName}}' must start with 'on'.",
            invalidFunctionName: "Handler function '{{funcName}}' must start with 'handle'.",
        },
        schema: [],
    },
    create(context) {
        return {
            JSXAttribute(node) {
                // If the attribute value is an expression, e.g. onClick={someVar}
                const value = node.value;
                if (
                    value &&
                    value.type === 'JSXExpressionContainer' &&
                    value.expression.type === 'Identifier'
                ) {
                    // 'propName' is e.g. "click", "onClick", "userSelectedOccurred"
                    const propName = node.name.name;
                    // 'funcName' is e.g. "actionClick", "handleClick", "triggerUser"
                    const funcName = value.expression.name;

                    // 1) Prop must start with "on"
                    if (!propName.startsWith('on')) {
                        context.report({
                            node,
                            messageId: 'invalidPropName',
                            data: { propName },
                        });
                    }

                    // 2) Referenced function must start with "handle"
                    if (!funcName.startsWith('handle')) {
                        context.report({
                            node,
                            messageId: 'invalidFunctionName',
                            data: { funcName },
                        });
                    }
                }
            },
        };
    },
};
