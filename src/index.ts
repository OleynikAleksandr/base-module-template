import { BaseModule } from './BaseModule';

// Экспортируем класс модуля
export { BaseModule as Module };

// Экспортируем все интерфейсы и сервисы для использования в других модулях
export * from './interfaces/kb-module';
export * from './services/IContextService';
export * from './tools/GetContextTool';
