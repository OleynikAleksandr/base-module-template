import { IKbModule, IServiceCollection, IMcpRegistry } from './interfaces/kb-module';
import { GetContextTool } from './tools/GetContextTool';
import { IContextService } from './services/IContextService';

/**
 * Базовый модуль для Modular KB с архитектурой Detached-Core
 */
export class BaseModule implements IKbModule {
    /**
     * Конфигурация модуля
     * @param services Коллекция сервисов для регистрации зависимостей
     * @param mcpRegistry Реестр MCP для регистрации инструментов
     */
    public configure(services: IServiceCollection, mcpRegistry: IMcpRegistry): void {
        console.log('BaseModule: Конфигурация модуля');
        
        // Регистрация сервисов
        // Примечание: в реальном модуле здесь будет регистрация конкретных сервисов
        // services.addScoped<IContextService, ContextServiceImpl>('IContextService', 'ContextServiceImpl');
        
        // Регистрация MCP-инструментов
        mcpRegistry.registerTool('kb_getContext', GetContextTool);
        
        // Регистрация фоновых сервисов
        // services.addHostedService('BackgroundWorker');
        
        console.log('BaseModule: Модуль успешно сконфигурирован');
    }
}
