export const brand={name:'サンプルホームケア',tagline:'暮らしの空間を、もっと心地よく',area:'東京・横浜・さいたま（架空の対応エリア）'};
export const services=[
{slug:'grout',title:'浴室・タイルケア',short:'浴室',summary:'タイルの目地や浴室の状態を確認し、適切なお手入れ方法をご案内するサービスの表示例です。',problem:'タイルのすき間や水回りの汚れが気になりませんか？',steps:['現状の確認','作業範囲の説明','作業手順の共有','お手入れ方法のご案内'],image:'/illustrations/bath.svg'},
{slug:'aircon-cleaning',title:'エアコンクリーニング',short:'エアコン',summary:'季節家電の清掃メニューを紹介するためのサンプルページです。',problem:'季節の変わり目にエアコンの点検をお考えですか？',steps:['外観・設置状況の確認','清掃範囲の説明','部品ごとのチェック項目','日常のお手入れ方法'],image:'/illustrations/air.svg'},
{slug:'washer-cleaning',title:'洗濯機クリーニング',short:'洗濯機',summary:'洗濯機のお手入れサービスを説明するカードの表示例です。',problem:'普段使う洗濯機の内部が気になりませんか？',steps:['機種・使用状況の確認','作業内容のご案内','作業項目の確認','注意事項の共有'],image:'/illustrations/washer.svg'},
{slug:'fabric-care',title:'ソファ・寝具ケア',short:'ファブリック',summary:'ソファやマットレスなど布製品のサービス紹介用サンプルです。',problem:'素材に合ったお手入れ方法を知りたい方へ。',steps:['素材の確認','プランの比較','お手入れ方法の説明','注意点のご案内'],image:'/illustrations/fabric.svg'}
] as const;
export const cases=[
{id:'sample-01',title:'浴室まわりのケア事例（サンプル）',category:'浴室ケア',location:'東京都内（架空事例）',summary:'写真の代わりに図形を使ったビフォー・アフター表示の例です。',details:['状態の確認','作業内容の整理','結果のご案内']},
{id:'sample-02',title:'エアコン点検の紹介例',category:'エアコン',location:'横浜市内（架空事例）',summary:'サービスの実施記録をカードで見せるレイアウト例です。',details:['事前点検','作業範囲の説明','お手入れのヒント']},
{id:'sample-03',title:'ソファ・寝具ケアの事例（サンプル）',category:'布製品',location:'さいたま市内（架空事例）',summary:'写真欄・対応エリア・作業内容をまとめた掲載例です。',details:['素材の確認','注意事項','作業後のご案内']}
] as const;
export const faqs=[
{q:'どのサービスを選べばよいですか？',a:'お手入れしたい場所や製品に応じて、各サービスの対象範囲を比較できる構成です。'},
{q:'希望日を入力すると予約が確定しますか？',a:'いいえ。これは操作確認用のデモ画面です。予約は送信・保存されず、実際の予約も成立しません。'},
{q:'作業はどのような流れで進みますか？',a:'お問い合わせ、ヒアリング、日程調整、作業、完了案内という流れを表示するサンプルです。'},
{q:'掲載されている写真は実際の施工写真ですか？',a:'いいえ。比較イメージはすべて抽象的な図形とサンプル素材を使用しています。'},
{q:'フォームに入力した内容は保存されますか？',a:'保存されません。画面上の操作だけを再現するデモです。個人情報は入力しないでください。'}
] as const;
export const posts=[
{title:'住まいのお手入れ手順を紹介',category:'ガイド',summary:'作業の流れを紹介するための架空のコンテンツカードです。'},
{title:'道具とサービスの進め方',category:'作業ノート',summary:'実在のブログやお客様の記録にはリンクしていません。'},
{title:'サービス選びのチェックリスト',category:'ヒント',summary:'比較しながら選ぶための情報設計の例です。'}
] as const;
export const adminMenus=[
{key:'',title:'ダッシュボード'},{key:'inquiries',title:'見積もり相談'},{key:'reservations',title:'予約・日程管理'},{key:'qna',title:'質問・回答管理'},{key:'cases',title:'施工事例管理'},{key:'services',title:'サービス情報'},{key:'faqs',title:'よくある質問'},{key:'assets',title:'画像素材管理'},{key:'settings',title:'サイト基本設定'}
] as const;
