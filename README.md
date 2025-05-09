# Базовый шаблон модуля для Modular KB

Это базовый шаблон модуля для расширения Modular KB с архитектурой Detached-Core.

## Структура модуля

```
base-module.zip
  ├─ lib/Module.Base.dll (скомпилированный модуль)
  ├─ module.json (метаданные модуля)
  └─ README.md (документация)
```

## Файл module.json

```json
{
  "id": "base-module",
  "version": "1.0.0",
  "entryType": "BaseModule.Module, BaseModule"
}
```

## Интерфейс IKbModule

```csharp
public interface IKbModule
{
    void Configure(IServiceCollection services, IMcpRegistry mcpRegistry);
}
```

## Пример реализации

```csharp
public class BaseModule : IKbModule
{
    public void Configure(IServiceCollection services, IMcpRegistry mcpRegistry)
    {
        // Регистрация сервисов
        services.AddScoped<IContextService, ContextService>();
        
        // Регистрация MCP-инструментов
        mcpRegistry.RegisterTool("kb_getContext", typeof(GetContextTool));
        
        // Регистрация фоновых сервисов
        services.AddHostedService<BackgroundWorker>();
    }
}
```

Этот проект является базовым шаблоном для создания модулей расширения Modular KB Extension. Используйте его как основу для разработки собственных модулей, которые будут загружаться в основное расширение.

## Установка

Существует два способа установки этого модуля:

### 1. Ручная установка

1. Скачайте или клонируйте этот репозиторий
2. Соберите модуль с помощью команды `npm install && npm run build`
3. В VS Code выполните команду "Modular KB: Load External Module"
4. Выберите директорию с этим модулем

### 2. Автоматическая установка

Если в основном расширении реализован механизм загрузки модулей из репозитория, вы можете просто указать URL этого репозитория в настройках расширения.

## Функциональность

Этот модуль добавляет команду "Modular KB: External Module Action", которая показывает информационное сообщение о том, что внешний модуль успешно выполнил действие.

## Использование шаблона для создания новых модулей

Для создания нового модуля на основе этого шаблона:

1. Скопируйте этот шаблон в новую директорию и переименуйте его в соответствии с назначением вашего модуля
2. Измените информацию в `package.json` (имя, версия, описание)
3. Модифицируйте класс в `src/index.ts`, реализующий интерфейс `IModule`
4. Добавьте свою функциональность в методы `initialize()` и `activate()`
5. Соберите модуль с помощью команды `npm install && npm run build`
6. Заархивируйте модуль и поместите его в папку `modules-build` основного расширения

После этого ваш модуль будет автоматически загружен при следующем запуске VS Code или при вызове команды "Загрузить новые модули".

## Структура проекта

```
external-module/
├── dist/               # Скомпилированные файлы
├── src/                # Исходный код
│   ├── interfaces/     # Интерфейсы, скопированные из основного расширения
│   ├── ExternalModule.ts # Реализация модуля
│   └── index.ts        # Точка входа
├── package.json        # Описание пакета
└── tsconfig.json       # Конфигурация TypeScript
```
