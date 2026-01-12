---
title: ツールの始め方
slug: /cfi/getting-started
---


## 🔍 Copy Failure Inspector Tools の使い方



Copy Failure Inspector Tools は、  

コピーに失敗した結果を「エラーとして止める」ためのツールではありません。  

コピーがうまくいかなかった理由を 構造的に可視化し、確認・判断できるようにするための診断ツール です。



---


### <span className="highlightBlue">1) 診断ウィンドウを開く</span>



PhysBone Full Copier から  Copy Failure Inspectorウィンドウを開きます。

![](/images/cfi/Animation12.gif)



以下の2つを指定してください。

\- Source（コピー元）：オリジナルの Prefab  

\- Target（コピー先）：修正済みの FBX

![](/images/cfi/Animation13.gif)

---
### <span className="highlightBlue">2) 🔍 ボーンの判定方法についてく</span>
このツールは、  
「このボーンは同じ名前かな？」  
と確認しながらコピーするツールです。


そのために、
ボーンを探すルールが 3 つ用意されています。

どのルールを使うかによって、
コピーできる・できないが変わります。

![](/images/cfi/dd2.png)


<div className="infoBlueBox">
💡 <strong>とりあえずこれで大丈夫</strong><br/>
制作環境や衣装の作り方によって最適な方式は異なりますが迷った場合は Name Normalizedを選択してください。
</div>

<span style={{ display: "block", height: "40px" }}></span>

<span class="highlightWineRed">■ Name Strict（名前がまったく同じ時だけ）</span>

ボーンの名前が、1 文字も違わず同じ時だけコピーします。

たとえば：
- Head → Head ✅
- Head → Head.001 ❌
- UpperArm_L → UpperArm_L ✅

とても厳しいルールなので、
オリジナルと FBX のボーン名が完全に同じ時に向いています。

:::caution 注意
 .001 や _1、_L / _R などが付いていると、
「別のボーン」と判断されてコピーできません。
:::




<span style={{ display: "block", height: "50px" }}></span>

<span class="highlightWineRed">■ Name Normalized（少し違っても同じと考える）</span>

名前が少し違っていても、同じボーンとして探します。

たとえば、こんな違いは気にしません

- .001 や _1 が付いている
- _L / _R と .L / .R の違い
- 大文字・小文字の違い

例：
- Head ↔ Head.001 ✅
- Arm_L ↔ Arm.L ✅

Blender から出した FBX や、
名前が少しズレている衣装を使う時に一番おすすめです。

:::caution 注意
 同じ名前っぽいボーンがたくさんある場合は、
「どれか分からないよ」という警告が表示されます。
:::



<span style={{ display: "block", height: "50px" }}></span>

<span class="highlightWineRed">■ Path Strict（親からの並びまで完全に同じ場合）</span>

名前だけでなく、
ボーンがどの順番でつながっているか（親子構造）まで
完全に同じ場合のみコピーされます。

つまり、「どのボーンの子なのか」まで一致している必要があります。


例：

✔ コピーされる例

Armature  
 └ Hips  
    └ Spine  
       └ Chest


❌ コピーされない例（途中の構造が違う）

Armature  
 └ Hips  
    └ Chest   ← 親が違う


途中の親ボーンや順番が違う場合、
同じ名前でもコピーされません。


:::caution 注意
とても正確な判定方法ですが、
ボーン構造が完全に同一な場合にのみ使用できます。
:::



---

### <span className="highlightBlue">3) 診断を実行する</span>


Source / Target を設定したら、  「診断実行」ボタン を押します。



コピーに失敗、または自動対応できなかった要素が  カテゴリ別に一覧表示されます。

![](/images/cfi/dd.png)


---

### <span className="highlightBlue">4) 結果タブの見方く</span>


診断結果は、状態ごとにタブで分類されます。


![](/images/cfi/dd3.png)


<span class="highlightBlueDeep"> ■ ターゲットのみ存在</span>

* このタブには、  オリジナル Prefab には存在せず、FBX 側にのみ存在するボーンやオブジェクトが表示されます。



* 例として `Hips.001` が表示されている場合、  ツールはこれを元の `Hips` とは異なる 完全に別のボーン として認識しています。



この場合は、  不要なボーンであれば削除し、  意図したボーンであれば名前や構造を確認してください。



---

### <span className="highlightBlue">5) 名前／階層の不一致</span>

📌 この画面は何を見るためのもの？

この画面は、
「コピーできなかった理由を調べるための画面」ではありません。

👉 「今のまま進んでいいかどうか」を判断するための画面です。

![](/images/cfi/dd5.png)


<div className="infoBlueBox">
💡 <strong>判断に迷ったら、ここだけ見てください</strong><br/>
表示されている名前が Hips / Spine / Chest かどうか を確認してください。
</div>

<span style={{ display: "block", height: "40px" }}></span>

❗ 必ず確認が必要なケース（重要）
リストに、以下のような名前が表示されている場合は注意してください。
- Hips  
- Spine  
- Chest

これらは、アバターの体の中心となる重要なボーンです。

<span style={{ display: "block", height: "40px" }}></span>

👉 これらのボーン名が一致していない場合、
- PhysBone
- Constraint

<span style={{ display: "block", height: "20px" }}></span>

が 正しく動作しない可能性 があります。

<span style={{ display: "block", height: "20px" }}></span>


✔️ このケースのみ、
ボーン名を正しい名前に揃える必要があります。


<span style={{ display: "block", height: "20px" }}></span>


✅ 無視して問題ないケース（ほとんどはこちら）

以下に当てはまる場合は、特に何もする必要はありません。

- アクセサリー用のオブジェクト
- PhysBone / Collider の位置（Hierarchy）が違うだけ


<span style={{ display: "block", height: "20px" }}></span>


衣装やアクセサリーの構造差によって自動的に表示されているだけ です。

👉 挙動に問題がなければ、そのまま進めて OK です。


---


### <span className="highlightBlue">6) リスト項目をクリックして確認する</span>


診断結果に表示されている項目は、  クリックするだけで Hierarchy 上の該当オブジェクトが自動的に選択 されます。



これにより、  

* どのボーンが対象なのか
* どこで構造がズレているのかを  

目で見てすぐに確認することができます。



![](/images/cfi/Animation14.gif)



---

### <span className="highlightBlue">7) 修正が必要かどうかの判断について</span>



すべての診断結果が修正必須というわけではありません。



\- Hips / Spine などの主要ボーン
<span class="highlightBlueDeep">

　→ 名前や構造を揃えることを推奨します

</span>



\- PhysBone や Collider 用の補助オブジェクト 




<span class="highlightBlueDeep">

　→ 挙動に問題がなければ、そのままでも問題ありません

</span>





<span style={{ display: "block", height: "15px" }}></span>



<span class="highlightSoftRed">

「必ず直すべき箇所」と「問題ない箇所」

</span>

を 制作者自身が判断するための材料を提供します。







---

### <span className="highlightBlue">8) 診断結果が出ていても問題ない場合があります</span>




診断結果に項目が表示されていても、  

最終的な挙動に問題がなければ、そのまま使用して問題ありません。



重要なのは、  エラーの有無ではなく  「何が違っているのかを理解した上で判断すること」です。



---


### <span className="highlightBlue">まとめ</span>


Copy Failure Inspector Tools は、  コピー失敗を責めるツールではありません。



どこが違っていて、なぜ対応できなかったのかを可視化し、  制作者が安心して判断できるようにするための診断ツールです。



PhysBone Full Copier と併用することで、  コピー作業時の不安や手探り確認を大幅に減らすことができます。



