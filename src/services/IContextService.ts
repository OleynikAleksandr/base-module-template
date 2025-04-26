/**
 * Интерфейс сервиса контекста
 */
export interface IContextService {
    /**
     * Получение контекста по идентификатору
     * @param contextId Идентификатор контекста
     * @returns Контекст в виде объекта
     */
    getContext(contextId: string): Promise<any>;
    
    /**
     * Сохранение контекста
     * @param contextId Идентификатор контекста
     * @param data Данные контекста
     */
    saveContext(contextId: string, data: any): Promise<void>;
}
