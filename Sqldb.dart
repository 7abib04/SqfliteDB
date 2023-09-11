
import 'package:sqflite/sqflite.dart';

import 'package:path/path.dart';




class SqlDb {


Database? _database;

Future<Database> get database async{

  if(_database!=null){
   return _database!;
  }
  _database= await _initialize();
  return _database!;
}

Future<String> get getpath async{
  const name = "DbName.db";
  final path = await getDatabasesPath();
  return join(path,name);
}

Future<Database> _initialize() async{
  final path = await getpath;
  var database = await openDatabase(
    path,
    version: 1,
    onCreate: create,
    singleInstance: true
  );
  return database;
}

Future<void> create(Database database , int version) async =>
    await createTable(database);




static final tablename='Name';
  static Future<void> createTable(Database database)async{
    await database.execute(
      """CREATE TABLE $tablename(
        "id" INTEGER PRIMARY KEY AUTOINCREMENT ,
        "title" TEXT NOT NULL ,
        "text" TEXT NOT NULL 
        
      );"""
    );
  }


  Future<int> insert(String query) async{
    final database = await SqlDb().database;
    return await database.rawInsert(
      '''$query'''
    );

  }
 read(String query) async{
    final database = await SqlDb().database;
    List<Map> response = await database!.rawQuery("$query");
    return response;

  }
delete (String query) async{
  final database = await SqlDb().database;
  int response = await database.rawDelete("$query");
  return response;
}
 update(String query)async{
  final database = await SqlDb().database;
  int response = await database.rawUpdate("$query");
  return response;
 }

}