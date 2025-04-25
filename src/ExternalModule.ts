import * as vscode from 'vscode';
import { IModule, IModuleRegistry } from './interfaces/module';

/**
 * Внешний модуль для демонстрации механизма загрузки внешних модулей
 */
export class ExternalModule implements IModule {
    public id: string = 'external-module';
    public version: string = '1.0.0';
    public displayName: string = 'Внешний Модуль';
    public description: string = 'Демонстрационный внешний модуль для тестирования механизма загрузки внешних модулей';
    
    private context: vscode.ExtensionContext | undefined;
    private registry: IModuleRegistry | undefined;
    private disposables: vscode.Disposable[] = [];
    
    /**
     * Инициализация модуля
     */
    public async initialize(context: vscode.ExtensionContext, registry: IModuleRegistry): Promise<void> {
        this.context = context;
        this.registry = registry;
        
        // Регистрируем команду для внешнего модуля
        const command = vscode.commands.registerCommand('modular-kb-vscode.externalModuleAction', () => {
            vscode.window.showInformationMessage('Внешний модуль успешно выполнил действие!');
        });
        
        this.disposables.push(command);
        this.context.subscriptions.push(command);
        
        console.log(`ExternalModule: Модуль инициализирован`);
    }
    
    /**
     * Активация модуля
     */
    public async activate(): Promise<void> {
        vscode.window.showInformationMessage('Внешний модуль активирован!');
        console.log(`ExternalModule: Модуль активирован`);
    }
    
    /**
     * Деактивация модуля
     */
    public async deactivate(): Promise<void> {
        // Освобождаем ресурсы
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
        
        console.log(`ExternalModule: Модуль деактивирован`);
    }
}
