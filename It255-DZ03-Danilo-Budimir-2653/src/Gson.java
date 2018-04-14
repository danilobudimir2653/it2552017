import com.sun.corba.se.impl.orbutil.ObjectWriter;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;

class DateTime {
    String date;
    String time;
}


public class Gson {
    public static void main(String[] args) throws Exception {
        String json = readUrl("http://date.jsontest.com/");


    Gson gson = new Gson();        
    DateTime proba = gson.fromJson(json, DateTime.class);

    System.out.println(proba.date);
    System.out.println(proba.date);
    }
    
    private static String readUrl(String urlString) throws Exception {
    BufferedReader reader = null;
    try {
        URL url = new URL(urlString);
        reader = new BufferedReader(new InputStreamReader(url.openStream()));
        StringBuilder buffer = new StringBuilder();
        int read;
        char[] chars = new char[1024];
        while ((read = reader.read(chars)) != -1)
            buffer.append(chars, 0, read); 

        return buffer.toString();
    } finally {
        if (reader != null)
            reader.close();
    }
}



}
