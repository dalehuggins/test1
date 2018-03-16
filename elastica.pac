function FindProxyForURL(url, host) {  
/*********************** URL MATCHING ***********************/
/************************************************************/

/*********************** HOST MATCHING ************************/
 if (shExpMatch(host, "*.clients3.google.com") || host=="clients3.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.www.googleapis.com") || host=="www.googleapis.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.drive.google.com") || host=="drive.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.clients6.google.com") || host=="clients6.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.googleusercontent.com") || host=="googleusercontent.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.android.clients.google.com") || host=="android.clients.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (host=="docs.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.accounts.google.com") || host=="accounts.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.googledrive.com") || host=="googledrive.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (host=="upload.docs.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
 if (shExpMatch(host, "*.clients5.google.com") || host=="clients5.google.com") { return "PROXY gw.elastica.net:443; DIRECT"; }
/*************************************************************/
 return "DIRECT";
}