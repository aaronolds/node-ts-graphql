const config = {
    'port': 9000,
    'sqldb': {
      'dialect': 'mssql',
      'server': 'localhost',
      dialectOptions: {  // Not needed if you connect to the default instance
        instanceName: 'SQLEXPRESS'
      },
      'database': 'SQLMescPayroll',
      'username': 'graphQL',
      'password': 'Asdf=4321'
    }
  };

  export default config;