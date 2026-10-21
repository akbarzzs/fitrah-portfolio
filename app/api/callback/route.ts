import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) return new NextResponse("Error: Kode tidak ditemukan", { status: 400 });

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      return new NextResponse(`GAGAL TOKEN: ${JSON.stringify(tokenData)}`, { status: 400 });
    }

    const accessToken = tokenData.access_token;

    // Suntik langsung ke localStorage browser & alihkan ke admin
    const html = `
      <!DOCTYPE html>
      <html>
      <head><title>Login Berhasil</title></head>
      <body>
        <h2>Login Berhasil! Mengalihkan ke Dashboard...</h2>
        <script>
          const authData = {
            token: "${accessToken}",
            provider: "github"
          };
          
          // Simpan token ke localStorage dengan format yang dibaca Decap CMS
          localStorage.setItem("netlify-cms-user", JSON.stringify(authData));
          
          // Langsung lempar ke halaman admin utama
          window.location.href = "/admin/index.html";
        </script>
      </body>
      </html>
    `;

    return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  } catch (error) {
    return new NextResponse("Server Error: " + error, { status: 500 });
  }
}