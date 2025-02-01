liff.init({ liffId: "2006595473-3aZ0Ov6J" }) // 替換為您的 LIFF ID
  .then(() => {
    if (liff.isLoggedIn()) {
      liff.getProfile().then(profile => {
        // 獲取用戶的 LINE User ID
        const userId = profile.userId;

        // Google 表單的基礎 URL
        const googleFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfZUbvqLYbA7iK27GO42i_YLDdVm2mxSC0hl1BTP4u4hH8Lww/viewform";

        // 動態生成完整 URL，插入 User ID
        const targetUrl = `${googleFormBaseUrl}?entry.1911758843=${userId}`;

        // 跳轉到動態生成的表單 URL
        window.location.href = targetUrl;
      });
    } else {
      // 如果未登入，要求用戶登入
      liff.login();
    }
  })
  .catch(err => {
    console.error("LIFF 初始化失敗:", err);
  });
