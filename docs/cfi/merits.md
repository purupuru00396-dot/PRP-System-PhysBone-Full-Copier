---

title: ツールのメリット

---

<div className="pinkSectionTitle">

🔍 Copy Failure Inspector Tools のメリット  
</div>

（なぜこのツールが必要なのか）



Copy Failure Inspector Tools は、  コピーに失敗した原因を「エラー」として止めるためのツールではありません。



* 「なぜコピーできなかったのか」  
* 「どこを確認すればいいのか」  

を、作業者がすぐに理解できる形で可視化するための診断ツールです。



---



<div className="pinkSectionTitle">

■ コピー失敗の原因を“見て理解できる

</div>



PhysBone や Constraint のコピーがうまくいかない場合、  原因の多くは以下のようなものです。



* ボーン名のわずかな違い（`.001`、`\_L / .L` など）
* 階層構造（パス）の違い
* 原本にはあるがFBXにはない骨
* FBXには新しくできたが原本にはない骨
  <span style={{ display: "block", height: "25px" }}></span>

しかし、  これらは Unity 上では 非常に見落としやすく、  「なんとなく動かない」という状態になりがちです。



Copy Failure Inspector Tools は、  こうした差分をカテゴリ別に整理し、  どのボーンが・どの理由で一致していないのかを一覧で表示します。



---



<div className="pinkSectionTitle">

■ 「原本にはあるがFBXにはない骨」を即座に特定

</div>


特に多いのが、  FBX 修正時に自動生成された `.001` 付きのボーンや、  意図せず増えてしまった新規ボーンです。

<span style={{ display: "block", height: "20px" }}></span>



Copy Failure Inspector の  「ターゲットにのみ存在」タブでは、

* 原本にはないがFBXにだけ存在する骨
* ツールが"全く別の別骨"と認識している対象

をリストとして表示します。



<span style={{ display: "block", height: "20px" }}></span>



リストをクリックするだけで、  Hierarchy 上の該当ボーンが即座にハイライトされるため、  

「どのボーンが問題なのか」を迷わず確認できます。



---



<div className="pinkSectionTitle">

■ 修正すべき箇所と、無視してよい箇所を切り分けられる

</div>


すべての差分が、  必ずしも修正対象になるわけではありません。



<span style={{ display: "block", height: "30px" }}></span>



例えば、

* Hips や Spine など、物理・姿勢に影響するボーン  

→ 名前・構造を揃える必要あり

* PhysBone / Collider 用のオブジェクト経路  

→ 正常であれば問題なし



<span style={{ display: "block", height: "20px" }}></span>



Copy Failure Inspector Tools は、  こうした違いを一覧で確認できるため、  

「直すべき差分」と「そのままでよい差分」を判断しやすくなります。



---



<div className="pinkSectionTitle">

■ 無駄な試行錯誤を減らし、作業の安全性を高める

</div>



コピーがうまくいかない原因が分からないまま作業を続けると、



* 設定を何度もやり直す
* 問題のないボーンまで触ってしまう
* 予期しない挙動崩れを招く

といったリスクが高まります。



<span style={{ display: "block", height: "20px" }}></span>



Copy Failure Inspector Tools を使えば、  

問題のある箇所だけに集中して確認・修正できるため、  

不要な作業や事故を未然に防ぐことができます。



---



<div className="pinkSectionTitle">

■ まとめ

</div>



Copy Failure Inspector Tools は、  コピーに失敗したときの「原因不明」をなくし、  



「何が起きているのかを理解した上で、安心して次の作業に進むためのツール」です。



<span style={{ display: "block", height: "20px" }}></span>





PhysBone Full Copier を  より安全に、より確実に使うための  重要なサポートツールとして設計されています。



