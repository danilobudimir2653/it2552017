public class VremeDatum {
    private String vreme;
    private String datum;
    
    public VremeDatum(){}
    public VremeDatum(String vreme, String datum) {
        this.vreme = vreme;
        this.datum = datum;
    }

    public String getVreme() {
        return vreme;
    }

    public String getDatum() {
        return datum;
    }

    public void setVreme(String vreme) {
        this.vreme = vreme;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    @Override
    public String toString() {
        return "VremeDatum{" + "vreme=" + vreme + ", datum=" + datum + '}';
    }
    
    
 
}
