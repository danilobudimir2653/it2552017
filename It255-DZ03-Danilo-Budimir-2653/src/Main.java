import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;


public class Main {
    public static void main(String[] args) {
        new Main();
    }
    
    public Main(){
        
        
        try {
            int broj = 0;
            
            Document doc;
            doc = (Document) Jsoup.connect("http://www.thomas-bayer.com/sqlrest/CUSTOMER/0/").get();
            while(broj < 5600) {
                System.out.println(broj);
                doc = (Jsoup.connect(("http://www.thomas-bayer.com/sqlrest/CUSTOMER/") + broj + ("/")).get());

                Elements elements = doc.select("customer");
                for (Element element : elements) {
                    String ime = element.select("firstname").get(0).text();
                    String prezime = element.select("lastname").get(0).text();
                    String adresa = element.select("street").get(0).text();
                    String grad = element.select("city").get(0).text();
                    System.out.println("Ime: " + ime);
                    System.out.println("Prezime: " + prezime);
                    System.out.println("Adresa: " + adresa);
                    System.out.println("Grad: " + grad);
                    broj++;
            }
            }
            
        } catch(IOException ex){
        }
        }
    }

