// Имитация скомпилированного модуля для тестирования
console.log('BaseModule: Модуль загружен');

// Экспорт класса модуля
module.exports = {
    BaseModule: class {
        configure(services, mcpRegistry) {
            console.log('BaseModule: Конфигурация модуля');
            
            // Регистрация MCP-инструментов
            mcpRegistry.registerTool('kb_getContext', {
                name: 'kb_getContext',
                runAsync: async (args, cancellationToken) => {
                    console.log(`BaseModule: Запрос контекста с ID ${args.contextId}`);
                    return {
                        success: true,
                        context: {
                            id: args.contextId,
                            data: 'Тестовые данные контекста'
                        }
                    };
                }
            });
            
            console.log('BaseModule: Модуль успешно сконфигурирован');
        }
    }
};
