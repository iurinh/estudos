package br.com.alura.agenda;

import android.location.Address;
import android.location.Geocoder;
import android.os.Bundle;
import android.util.Log;

import com.google.android.gms.maps.CameraUpdate;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

import java.io.IOException;
import java.util.List;

import br.com.alura.agenda.dao.AlunoDAO;
import br.com.alura.agenda.modelo.Aluno;

/**
 * Created by iuhi on 05/04/2017.
 */

public class MapaFragment extends SupportMapFragment implements OnMapReadyCallback {

    private GoogleMap googleMap;

    @Override
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);

        //Prepara instancia do Google Maps para manipulação do mapa
        getMapAsync(this);
    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        this.googleMap = googleMap;
        LatLng posicaoDaEscola = pegaCoordenadaDoEndereço("Rua Jose da Costa de Andrade, 105");

        if(posicaoDaEscola != null){
            centralizaEm(posicaoDaEscola);
        }

        AlunoDAO dao = new AlunoDAO(getContext());
        List<Aluno> alunos = dao.buscaAlunos();

        for(Aluno aluno : alunos){
            LatLng coordenada = pegaCoordenadaDoEndereço(aluno.getEndereco());
            if(coordenada != null) {
                MarkerOptions marcador = new MarkerOptions();
                marcador.position(coordenada);
                marcador.title(aluno.getNome());
                marcador.snippet(String.valueOf(aluno.getNota()));

                googleMap.addMarker(marcador);
            }
        }
        dao.close();

        new Localizador(getContext(), this);
    }

    public void centralizaEm(LatLng coordenada) {
        if (googleMap != null) {
            CameraUpdate update = CameraUpdateFactory.newLatLngZoom(coordenada, 17);
            googleMap.moveCamera(update);
        }
    }

    private LatLng pegaCoordenadaDoEndereço(String endereco) {
        Geocoder geocoder = new Geocoder(getContext());
        List<Address> resultados = null;
        try {
            resultados = geocoder.getFromLocationName(endereco, 5);

            if(!resultados.isEmpty()){
                Log.i(">>>>>getLatitude",resultados.get(0).getLatitude()+"");
                Log.i(">>>>>getLongitude",resultados.get(0).getLongitude()+"");
                LatLng posicao = new LatLng(resultados.get(0).getLatitude(), resultados.get(0).getLongitude());
                return posicao;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }
}
