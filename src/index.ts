import { ExternalModule } from './ExternalModule';

// Экспортируем класс модуля
export { ExternalModule };

// Экспортируем функцию для создания экземпляра модуля
export function createModule() {
    return new ExternalModule();
}
