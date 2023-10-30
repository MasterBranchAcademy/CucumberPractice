package mba_cucumber.utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {
    private static Properties properties;

    static {
        try {
            String path = "config.properties";

            // dosyayi java diline okur veya dondurur
            FileInputStream input = new FileInputStream(path);

            properties = new Properties();
            // verileri dosyadan key / value seklinde yukler
            properties.load(input);

        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public static String getProperties(String keyName){
        return properties.getProperty(keyName);
    }
}
