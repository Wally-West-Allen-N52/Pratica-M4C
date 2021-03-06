package ca.com.crud.factory;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionFactory {
	// Create DB connection method
	public static Connection createConnectionSQLServer() throws Exception {
		// Code to connect
		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver"); // JVM load the the class

		// =============== SQL Server DB integration
		Connection connection = DriverManager.getConnection(
				"jdbc:sqlserver://DESKTOP-GODBMFL"
				+ "databaseName=RVRentAgencyDB"
				+ "user=sa"
				+ "password=W471984wN250299n");
		return connection;
	}
	// Create data recovery method
	public static void main(String[] args) throws Exception {
		Connection conn = createConnectionSQLServer(); // DB connection recovery
		if (conn != null) {
			System.out.println("Successful Connection " + conn);
			conn.close();
		}
	}
}
