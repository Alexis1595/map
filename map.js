paquete com. bootcamp;

importar java. utilidad. HashMap;
importar java. utilidad. Mapa;


clase pública MapMain {

    public static void main(String[] args) {

        Map<String, String> personas = new HashMap<String, String>();

        personas. put("5471236G", "Nombre Apellido 1");
        personas. put("5474536G", "Nombre Apellido 2");
        personas. put("5448936G", "Nombre Apellido 3");

        Sistema. fuera. println(personas);

        for (Clave de cadena : personas. keySet()) {
            Sistema. fuera. println(clave);
        }

        for (Valor de cadena  : personas. valores()) {
            Sistema. fuera. println(valor);
        }

        for (Mapa. Entrada<String, String> par : personas. entrySet()) {
            Sistema. fuera. println(par. getKey() + " " + par. getValue());
        }
    }
}
