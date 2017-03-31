package br.com.alura.agenda.dao;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

/**
 * Created by iuhi on 31/03/2017.
 */

public class AlunoDAO extends SQLiteOpenHelper{


    public AlunoDAO(Context context) {
        super(context, "Agenda", null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String sql = "CREATE TABLE alunos (" +
                    " id INTEGER PRIMARY KEY," +
                    " nome TEXT NOT NULL" +
                    " endereco TEXT" +
                    " telefone TEXT" +
                    " site TEXT" +
                    " nota REAL" +
                    ")";

        db.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        String sql = "DROP TABLE IF EXIST alunos";

        db.execSQL(sql);

        onCreate(db);
    }
}
