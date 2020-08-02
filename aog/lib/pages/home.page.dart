import 'package:aog/widgets/logo.widget.dart';
import 'package:aog/widgets/submit-form.widget.dart';
import 'package:aog/widgets/success.widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_masked_text/flutter_masked_text.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  Color _color = Colors.deepPurple;
  var _gasCtrl = new MoneyMaskedTextController();
  var _alcCtrl = new MoneyMaskedTextController();
  var _busy = false;
  var _completed = false;
  var _resultText = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Theme.of(context).primaryColor,
        body: AnimatedContainer(
          duration: Duration(seconds: 1),
          color: _color,
          child: ListView(
            children: <Widget>[
              Logo(),
              _completed
                  ? Success(
                      result: _resultText,
                      reset: reset,
                    )
                  : SubmitForm(
                      gasCtrl: _gasCtrl,
                      alcCtrl: _alcCtrl,
                      busy: _busy,
                      submit: calculate,
                    ),
            ],
          ),
        ));
  }

  Future calculate() {
    double alc = double.parse(
          _alcCtrl.text.replaceAll(new RegExp(r'[,.]'), ''),
        ) /
        100;

    double gas = double.parse(
          _gasCtrl.text.replaceAll(new RegExp(r'[,.]'), ''),
        ) /
        100;

    double res = alc / gas;

    setState(() {
      _completed = false;
      _busy = true;
      _color = Colors.deepPurpleAccent;
    });

    return new Future.delayed(const Duration(seconds: 1), () {
      setState(() {
        if (res >= 0.7)
          _resultText = 'Compensa utilizar Gasolina!';
        else
          _resultText = 'Compensa utilizar Álcool!';

        _completed = true;
        _busy = false;
      });
    });
  }

  void reset() {
    setState(() {
      _gasCtrl = new MoneyMaskedTextController();
      _alcCtrl = new MoneyMaskedTextController();
      _busy = false;
      _completed = false;
      _color = Colors.deepPurple;
    });
  }
}
