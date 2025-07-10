
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/evaluar', methods=['POST'])
def evaluar():
    data = request.json
    edad = data.get('edad_usuario')
    interacciones = data.get('interaccionSemanal', 0)
    emocion = data.get('emocionSocial', '').lower()

    resultado = {
        "diagnostico": "Diagnóstico simulado para edad {} con emoción {}".format(edad, emocion),
        "pronostico": "Pronóstico de acuerdo a las variables ingresadas.",
        "reaccion": "Reacción basada en patrones conocidos."
    }
    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True)
