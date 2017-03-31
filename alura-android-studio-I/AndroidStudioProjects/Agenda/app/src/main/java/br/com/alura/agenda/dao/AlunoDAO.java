package br.com.alura.agenda.dao;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import br.com.alura.agenda.modelo.Aluno;

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

    public void insere(Aluno aluno) {
        SQLiteDatabase db = getWritableDatabase();

        ContentValues dados = new ContentValues();
        dados.put("nome", aluno.getNome());
        dados.put("endereco", aluno.getEndereco());
        dados.put("telefone", aluno.getTelefone());
        dados.put("site", aluno.getSite());
        dados.put("nota", aluno.getNota());

        db.insert("alunos", null, dados);
    }
}
