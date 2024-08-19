
---

# SqlDb Package for Sqflite

## Overview

The `SqlDb` class is a simple wrapper for the `sqflite` package, designed to simplify the process of interacting with a SQLite database in Flutter. It handles database initialization, table creation, and provides basic CRUD (Create, Read, Update, Delete) operations.

## Features

- Initialize and open a SQLite database.
- Create a table with predefined schema.
- Insert, read, update, and delete data from the table using raw SQL queries.

## Requirements

- Flutter SDK
- sqflite package
- path package

## Installation

Add the following dependencies to your `pubspec.yaml` file:

```yaml
dependencies:
  flutter:
    sdk: flutter
  sqflite: any
  path: any
```

## Usage

### 1. Import the packages

```dart
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import 'path_to_your_sqldb_file.dart';
```

### 2. Initialize the Database

The `SqlDb` class handles the initialization of the database. You don't need to manually open or close the database connection.

```dart
SqlDb sqlDb = SqlDb();
```

### 3. Create the Table

The table is created automatically when the database is initialized for the first time. The table schema is predefined with three columns: `id`, `title`, and `text`.

### 4. Perform CRUD Operations

#### Insert

To insert data into the table, use the `insert` method with a raw SQL query.

```dart
await sqlDb.insert("INSERT INTO Name (title, text) VALUES ('Title', 'Text')");
```

#### Read

To read data from the table, use the `read` method with a raw SQL query.

```dart
List<Map> results = await sqlDb.read("SELECT * FROM Name");
```

#### Update

To update data in the table, use the `update` method with a raw SQL query.

```dart
await sqlDb.update("UPDATE Name SET title = 'New Title' WHERE id = 1");
```

#### Delete

To delete data from the table, use the `delete` method with a raw SQL query.

```dart
await sqlDb.delete("DELETE FROM Name WHERE id = 1");
```

## Example

Here is a complete example of how to use the `SqlDb` class in a Flutter application:

```dart
import 'package:flutter/material.dart';
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  SqlDb sqlDb = SqlDb();

  @override
  void initState() {
    super.initState();
    _initializeDatabase();
  }

  Future<void> _initializeDatabase() async {
    await sqlDb.database;
  }

  Future<void> _insertData() async {
    await sqlDb.insert("INSERT INTO Name (title, text) VALUES ('Sample Title', 'Sample Text')");
  }

  Future<void> _readData() async {
    List<Map> results = await sqlDb.read("SELECT * FROM Name");
    print(results);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("SqlDb Example"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: _insertData,
              child: Text("Insert Data"),
            ),
            ElevatedButton(
              onPressed: _readData,
              child: Text("Read Data"),
            ),
          ],
        ),
      ),
    );
  }
}
```

## License

This project is licensed under the MIT License.

---

