distr();
async function distr() {
    let url = `https://www.ozon.ru/search/?text=${encodeURIComponent('jjj')}&from_global=true`;
    let params = {
        'authority': 'www.ozon.ru',
        'method': 'GET',
        'path': '/search/?text=jjj&from_global=true',
        'scheme': 'https',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'max-age=0',
        'Cookie': `xcid=25c4ee873a72263c38fbe2f844711dd3; __Secure-ext_xcid=25c4ee873a72263c38fbe2f844711dd3; __Secure-ab-group=18; __Secure-user-id=0; __Secure-ETC=89e2dfc8935f457883f67aecc6ddb3bd; abt_data=f823590be5a601a6b50e4accb0f70b7e:02701979841863111f446affd148e592be2edfba0d4172c37e34919e47b5b92cfceadd360fcb88a09beb79b5fd4a45c3041e0e65171a8a238fa19921e34c79f3e3e5449b89a5123c2cfb0ebd0427f264b61a90f72c3f5cf1385b3ce0ec5dd3d9d63d902c4d261be56f0544c517e4695756b1e863b43b87d4bf539121da69031d1707370ef81894b644ece0cd78defacfbfce072d021b6966813ffed12f8d19fb4b8ccc7a3b4d13df0395607c5f35f96dbe89ce8f31acbe152579154bbf415da5344dd0b52405adddf79c3913b9ba5d4bcab5cf0f9058cb27d58734e4090b20afb0f3f761dd3dd35793faba53a09a58d5647cb680a371fcb57546d098db30f75744a549f602af20685375d517abd2ff0281d11a76d41a9f04c51d223821a24c0d962ed5a651b9083ab93d78250b8d3126999e7315be6e6800e41536fbb3cf91c9; ADDRESSBOOKBAR_WEB_CLARIFICATION=1712679715; rfuid=NjkyNDcyNDUyLDEyNC4wNDM0NzY1NzgwODEwMywxMzQ3MDc1MTIzLC0xLDI5MjAxMjI0NCxXM3NpYm1GdFpTSTZJbEJFUmlCV2FXVjNaWElpTENKa1pYTmpjbWx3ZEdsdmJpSTZJbEJ2Y25SaFlteGxJRVJ2WTNWdFpXNTBJRVp2Y20xaGRDSXNJbTFwYldWVWVYQmxjeUk2VzNzaWRIbHdaU0k2SW1Gd2NHeHBZMkYwYVc5dUwzQmtaaUlzSW5OMVptWnBlR1Z6SWpvaWNHUm1JbjBzZXlKMGVYQmxJam9pZEdWNGRDOXdaR1lpTENKemRXWm1hWGhsY3lJNkluQmtaaUo5WFgwc2V5SnVZVzFsSWpvaVEyaHliMjFsSUZCRVJpQldhV1YzWlhJaUxDSmtaWE5qY21sd2RHbHZiaUk2SWxCdmNuUmhZbXhsSUVSdlkzVnRaVzUwSUVadmNtMWhkQ0lzSW0xcGJXVlVlWEJsY3lJNlczc2lkSGx3WlNJNkltRndjR3hwWTJGMGFXOXVMM0JrWmlJc0luTjFabVpwZUdWeklqb2ljR1JtSW4wc2V5SjBlWEJsSWpvaWRHVjRkQzl3WkdZaUxDSnpkV1ptYVhobGN5STZJbkJrWmlKOVhYMHNleUp1WVcxbElqb2lRMmh5YjIxcGRXMGdVRVJHSUZacFpYZGxjaUlzSW1SbGMyTnlhWEIwYVc5dUlqb2lVRzl5ZEdGaWJHVWdSRzlqZFcxbGJuUWdSbTl5YldGMElpd2liV2x0WlZSNWNHVnpJanBiZXlKMGVYQmxJam9pWVhCd2JHbGpZWFJwYjI0dmNHUm1JaXdpYzNWbVptbDRaWE1pT2lKd1pHWWlmU3g3SW5SNWNHVWlPaUowWlhoMEwzQmtaaUlzSW5OMVptWnBlR1Z6SWpvaWNHUm1JbjFkZlN4N0ltNWhiV1VpT2lKTmFXTnliM052Wm5RZ1JXUm5aU0JRUkVZZ1ZtbGxkMlZ5SWl3aVpHVnpZM0pwY0hScGIyNGlPaUpRYjNKMFlXSnNaU0JFYjJOMWJXVnVkQ0JHYjNKdFlYUWlMQ0p0YVcxbFZIbHdaWE1pT2x0N0luUjVjR1VpT2lKaGNIQnNhV05oZEdsdmJpOXdaR1lpTENKemRXWm1hWGhsY3lJNkluQmtaaUo5TEhzaWRIbHdaU0k2SW5SbGVIUXZjR1JtSWl3aWMzVm1abWw0WlhNaU9pSndaR1lpZlYxOUxIc2libUZ0WlNJNklsZGxZa3RwZENCaWRXbHNkQzFwYmlCUVJFWWlMQ0prWlhOamNtbHdkR2x2YmlJNklsQnZjblJoWW14bElFUnZZM1Z0Wlc1MElFWnZjbTFoZENJc0ltMXBiV1ZVZVhCbGN5STZXM3NpZEhsd1pTSTZJbUZ3Y0d4cFkyRjBhVzl1TDNCa1ppSXNJbk4xWm1acGVHVnpJam9pY0dSbUluMHNleUowZVhCbElqb2lkR1Y0ZEM5d1pHWWlMQ0p6ZFdabWFYaGxjeUk2SW5Ca1ppSjlYWDFkLFd5SnlkUzFTVlNKZCwwLDEsMCwyNCwxNDI3NSw4LDIyNzEyNjUyMCwwLDEsMCwtNDkxMjc1NTIzLFIyOXZaMnhsSUVsdVl5NGdUbVYwYzJOaGNHVWdSMlZqYTI4Z1RXRmpTVzUwWld3Z05TNHdJQ2hOWVdOcGJuUnZjMmc3SUVsdWRHVnNJRTFoWXlCUFV5QllJREV3WHpFMVh6Y3BJRUZ3Y0d4bFYyVmlTMmwwTHpVek55NHpOaUFvUzBoVVRVd3NJR3hwYTJVZ1IyVmphMjhwSUVOb2NtOXRaUzh4TWpNdU1DNHdMakFnVTJGbVlYSnBMelV6Tnk0ek5pQXlNREF6TURFd055Qk5iM3BwYkd4aCxleUpqYUhKdmJXVWlPbnNpWVhCd0lqcDdJbWx6U1c1emRHRnNiR1ZrSWpwbVlXeHpaU3dpU1c1emRHRnNiRk4wWVhSbElqcDdJa1JKVTBGQ1RFVkVJam9pWkdsellXSnNaV1FpTENKSlRsTlVRVXhNUlVRaU9pSnBibk4wWVd4c1pXUWlMQ0pPVDFSZlNVNVRWRUZNVEVWRUlqb2libTkwWDJsdWMzUmhiR3hsWkNKOUxDSlNkVzV1YVc1blUzUmhkR1VpT25zaVEwRk9UazlVWDFKVlRpSTZJbU5oYm01dmRGOXlkVzRpTENKU1JVRkVXVjlVVDE5U1ZVNGlPaUp5WldGa2VWOTBiMTl5ZFc0aUxDSlNWVTVPU1U1SElqb2ljblZ1Ym1sdVp5SjlmWDE5LDY1LC01NDAzMDY4NjYsMSwxLC0xLDE2OTk5NTQ4ODcsMTY5OTk1NDg4NywtMTU2MTQ4MTY3MCwy; is_cookies_accepted=1; __Secure-access-token=4.0.s7kVD5XoRkiYko8hNNFhVQ.18.ASsBUzqei1T_qPMXGow_UYBCHO6xvBT00hwHeyVu8diPxd1TR5x_Irgmg-uOmcKKtg..20240410111106.TIl26SB98OCXutlP7jev0Yk-eG17VSpiIg0OY9FQpCc; __Secure-refresh-token=4.0.s7kVD5XoRkiYko8hNNFhVQ.18.ASsBUzqei1T_qPMXGow_UYBCHO6xvBT00hwHeyVu8diPxd1TR5x_Irgmg-uOmcKKtg..20240410111106.fgXDnVRsObFlyTj5GEuKy44McFR1MOrRJl3xsVoxcRU; cf_clearance=EL30ez3fpumCeDmfIxCym_JjXP6IUKPDgV.hNo211b8-1712740270-1.0.1.1-ABkpBvA7SLysDYbTsmwwcgHRUjborM34VABtR2.6tndSR7Wd.fk9Q1p58cBGNFBilib7OnFA.KzrF5IMItcctA; __cf_bm=GQVSHe38SfQ.yRPjqYEjGolhulFlql4U_2xMxHZciMY-1712742741-1.0.1.1-dlZzmfXGY_szGEUO7RFQpkOGSWoYv1N0rCbB4cVOcMLjRCNKcCH5U09al4zl3ItrSbDA4BK53ziDaMlb3u2e.g`,
        'Referer': 'https://www.ozon.ru/',
        'Sec-Ch-Ua': `"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"`,
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': `"macOS"`,
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Service-Worker-Navigation-Preload': 'true',
        'Upgrade-Insecure-Requests': 1,
        'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36`

    }
    
    let response = await fetch(url, params);
    let htmlString = await response.text();
    console.log(htmlString);
}