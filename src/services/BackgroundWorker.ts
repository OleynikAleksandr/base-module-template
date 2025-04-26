/**
 * Фоновый сервис для выполнения задач в фоновом режиме
 */
export class BackgroundWorker {
    // Флаг для отслеживания состояния сервиса
    private isRunning: boolean = false;
    
    /**
     * Запуск сервиса
     */
    public async startAsync(cancellationToken: any): Promise<void> {
        console.log('BackgroundWorker: Запуск фонового сервиса');
        this.isRunning = true;
        
        // Имитация фоновой работы
        this.runBackgroundTask(cancellationToken);
    }
    
    /**
     * Остановка сервиса
     */
    public async stopAsync(cancellationToken: any): Promise<void> {
        console.log('BackgroundWorker: Остановка фонового сервиса');
        this.isRunning = false;
    }
    
    /**
     * Выполнение фоновой задачи
     */
    private async runBackgroundTask(cancellationToken: any): Promise<void> {
        while (this.isRunning && !cancellationToken.isCancellationRequested) {
            try {
                console.log('BackgroundWorker: Выполнение фоновой задачи');
                
                // Имитация работы
                await new Promise(resolve => setTimeout(resolve, 60000)); // Пауза 1 минута
            } catch (error) {
                console.error('BackgroundWorker: Ошибка при выполнении фоновой задачи', error);
            }
        }
    }
}
