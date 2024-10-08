<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>

    <head>
        <title>JSP World</title>
    </head>
    <%
    String s = "Hello, Welcome to JSP World! Let's go!";
    String t = "JSP";
    
    
    int length = s.length();
    
    // 'JSP'의 위치
    int position = s.indexOf(t);
    
    
    char charAtIndex3 = s.charAt(3);
    
   
    boolean isEqual = s.equals(t);
    int comparison = s.compareTo(t);

    String upperCase = s.toUpperCase(s);
    String lowerCase = s.toLowerCase(s);
    
   
    char[] charArray = s.toCharArray();
    
    
    String trimmed = s.trim();

    <body>
   

            <h2>문자열 정보</h2>
            <p>문자열:
                <%= s %>
        </p>
        <p>문자열의 길이:
            <%= length %>
        </p>
        <p>'JSP'의 위치:
            <%= position %>
        </p>
        <p>모두 대문자로 변경:
            <%= upperCase %>
        </p>
        <p>모두 소문자로 변경:
            <%= lowerCase %>
        </p>

        </body>

    </html>