package br.com.alura.agenda;

import android.content.Intent;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.util.Arrays;
import java.util.List;

import br.com.alura.agenda.modelo.Prova;

public class ProvasActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_provas);

//        List<String> topicosPort = Arrays.asList("Sujeito", "Objeto Direto", "Objeto Indireto");
//        Prova provaPortugues = new Prova("Português", "25/05/2016", topicosPort);
//
//        List<String> topicosMat = Arrays.asList("Equações de segundo grau", "Trigonometria");
//        Prova provaMatematica = new Prova("Matemática", "27/05/2016", topicosMat);
//
//        List<Prova> provas = Arrays.asList(provaPortugues,provaMatematica);
//        ArrayAdapter<Prova> adapter = new ArrayAdapter<Prova>(this,android.R.layout.simple_list_item_1, provas);
//
//        ListView lista = (ListView) findViewById(R.id.provas_lista);
//        lista.setAdapter(adapter);
//
//        lista.setOnItemClickListener(new AdapterView.OnItemClickListener() {
//            @Override
//            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
//                Prova prova = (Prova) parent.getItemAtPosition(position);
//                Toast.makeText(ProvasActivity.this, "Clicou na prova de " + prova, Toast.LENGTH_SHORT).show();
//
//                Intent vaiParaDetalhes = new Intent(ProvasActivity.this, DetalhesProvaActivity.class);
//                vaiParaDetalhes.putExtra("prova", prova);
//                startActivity(vaiParaDetalhes);
//            }
//        });

        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction tx = fragmentManager.beginTransaction();

        tx.replace(R.id.frame_principal, new ListaProvasFragment());

        if(estaNoModoPaisagem())
            tx.replace(R.id.frame_secundario, new DetalhesProvaFragment());

        tx.commit();
    }

    private boolean estaNoModoPaisagem() {
        return getResources().getBoolean(R.bool.modoPaisagem);
    }

    public void selecionaProva(Prova prova) {
        FragmentManager manager = getSupportFragmentManager();

        if(!estaNoModoPaisagem()) {
            FragmentTransaction tx = manager.beginTransaction();

            DetalhesProvaFragment detalhesFragment = new DetalhesProvaFragment();
            Bundle parametros = new Bundle();
            parametros.putSerializable("prova", prova);
            detalhesFragment.setArguments(parametros);

            tx.replace(R.id.frame_principal, detalhesFragment);
            tx.addToBackStack(null);//Coloca o estado anterior na pilha do botao voltar, como se fosse uma activity. O parametro serve para identificar o ponto de retorno
            tx.commit();
        }else {
            DetalhesProvaFragment detalhesFragment = (DetalhesProvaFragment) manager.findFragmentById(R.id.frame_secundario);
            detalhesFragment.populaCamposCom(prova);
        }
    }
}
