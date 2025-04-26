import { IContextService } from '../services/IContextService';

/**
 * Аргументы для инструмента получения контекста
 */
export interface GetContextArgs {
    contextId: string;
}

/**
 * MCP-инструмент для получения контекста
 */
export class GetContextTool {
    /**
     * Конструктор инструмента
     * @param contextService Сервис контекста
     */
    constructor(private readonly contextService: IContextService) {
        console.log('GetContextTool: Инструмент создан');
    }
    
    /**
     * Имя инструмента
     */
    public get name(): string {
        return 'kb_getContext';
    }
    
    /**
     * Выполнение инструмента
     * @param args Аргументы инструмента
     * @param cancellationToken Токен отмены
     * @returns Результат выполнения инструмента
     */
    public async runAsync(args: GetContextArgs, cancellationToken: any): Promise<any> {
        console.log(`GetContextTool: Запрос контекста с ID ${args.contextId}`);
        
        try {
            // Получаем контекст через сервис
            const context = await this.contextService.getContext(args.contextId);
            
            if (!context) {
                return {
                    success: false,
                    error: `Контекст с ID ${args.contextId} не найден`
                };
            }
            
            return {
                success: true,
                context: context
            };
        } catch (error) {
            console.error('GetContextTool: Ошибка при получении контекста', error);
            
            return {
                success: false,
                error: `Ошибка при получении контекста: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`
            };
        }
    }
}
