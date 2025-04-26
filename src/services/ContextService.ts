import { IContextService } from './IContextService';

/**
 * Реализация сервиса контекста
 */
export class ContextService implements IContextService {
    // Простое хранилище контекстов для демонстрации
    private contexts: Map<string, any> = new Map();
    
    /**
     * Получение контекста по идентификатору
     * @param contextId Идентификатор контекста
     * @returns Контекст в виде объекта
     */
    public async getContext(contextId: string): Promise<any> {
        console.log(`ContextService: Запрос контекста с ID ${contextId}`);
        
        if (!this.contexts.has(contextId)) {
            return null;
        }
        
        return this.contexts.get(contextId);
    }
    
    /**
     * Сохранение контекста
     * @param contextId Идентификатор контекста
     * @param data Данные контекста
     */
    public async saveContext(contextId: string, data: any): Promise<void> {
        console.log(`ContextService: Сохранение контекста с ID ${contextId}`);
        this.contexts.set(contextId, data);
    }
}
