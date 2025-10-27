const ready = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

const formatNumber = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const I18N_STRINGS = {
  ja: {
    'meta.title': '株式会社東京キャリイサービス | 首都圏の物流パートナー',
    'meta.description': '株式会社東京キャリイサービスは、東京都八王子市を拠点に首都圏全域へ一般貨物・建築資材・法人向け物流サービスを提供します。『納期どおり・安全に・サービス良く』の輸送品質で信頼をお届けします。',
    'meta.ogTitle': '株式会社東京キャリイサービス | 首都圏の物流パートナー',
    'meta.ogDescription': '東京都八王子市を拠点に首都圏全域へ物流サービスを提供。一般貨物配送・建築資材配送・特殊車両対応で、納期厳守と安全輸送を実現します。',
    'nav.logoLabel': '株式会社東京キャリイサービス ホーム',
    'nav.menuToggle': 'メニュー',
    'nav.menuToggleLabel': 'ナビゲーションを開閉',
    'nav.services': 'サービス',
    'nav.company': '会社概要',
    'nav.fleet': '車両紹介',
    'nav.recruit': '採用情報',
    'nav.voices': 'お客様の声',
    'nav.contact': 'お問い合わせ',
    'nav.primaryCta': '見積もり依頼',
    'nav.langToggleLabel': '英語バージョンへ切り替え',
    'hero.kicker': '首都圏全域対応｜東京都・神奈川県・埼玉県',
    'hero.title': '首都圏物流の最前線へ。「納期どおり・安全に・サービス良く」を、あなたに。',
    'hero.description': '株式会社東京キャリイサービスは、拠点の八王子から多摩地域・23区・湾岸エリアまで法人様の貨物を最適なルートでお届けします。夜間・早朝便や大型建材輸送も24時間フル稼働体制で対応します。',
    'hero.ctaPrimary': 'サービス案内を見る',
    'hero.ctaSecondary': '採用情報へ',
    'hero.badge1': '大型〜小型まで20台超の車両ラインナップ',
    'hero.badge2': '緊急対応平均レスポンス30分',
    'hero.badge3': '事故ゼロ継続3年更新中',
    'hero.metric1.label': '年間配送実績',
    'hero.metric2.label': '納期遵守率',
    'hero.metric3.label': '法人取引先',
    'hero.note.title': '最新導入事例',
    'hero.note.body': '物流センター向け夜間定期便の導入で、入荷リードタイムを38%短縮。多摩地域ナンバーワンの輸送品質を目指しています。',
    'hero.note.link': '導入事例を読む',
    'company.title': '会社概要',
    'company.lead': '輸送品質を最優先に考え、法人様の荷物を最適に届けることが私たちの使命です。八王子を拠点に首都圏のサプライチェーンを支えています。',
    'company.profile.name.label': '会社名',
    'company.profile.name.value': '株式会社東京キャリイサービス',
    'company.profile.address.label': '所在地',
    'company.profile.address.value': '〒192-0043 東京都八王子市大谷町282-3',
    'company.profile.area.label': '対象エリア',
    'company.profile.area.value': '首都圏（東京都・神奈川県・埼玉県）',
    'company.profile.business.label': '事業内容',
    'company.profile.business.value': '一般貨物運送／建築資材配送／法人向け物流サービス',
    'company.profile.hours.label': '対応時間',
    'company.profile.hours.value': '24時間365日（緊急便・夜間・早朝にも対応）',
    'company.profile.cta': '会社資料を請求する',
    'company.strengths.heading': '私たちの強み',
    'company.strengths.item1.title': '幅広い車両ラインナップ',
    'company.strengths.item1.desc': '2tバン／3tワイドゲート／ユニック等の特殊車両まで対応',
    'company.strengths.item2.title': '24時間フル稼働体制',
    'company.strengths.item2.desc': '夜間搬入・早朝納品・時間指定便まで柔軟に対応',
    'company.strengths.item3.title': '熟練ドライバー多数',
    'company.strengths.item3.desc': '平均勤続年数8年、危険物取扱・玉掛け等の有資格者が在籍',
    'company.strengths.item4.title': '安全×品質の取り組み',
    'company.strengths.item4.desc': '月次安全講習・ドラレコ分析・点呼体制で事故ゼロを継続',
    'company.map.note': '※マップはGoogle Mapsを利用しています。実際の配送エリア詳細はお問い合わせください。',
    'company.map.iframeTitle': '株式会社東京キャリイサービス所在地',
    'services.title': 'サービス紹介',
    'services.lead': '一般貨物から重量物・建築資材まで、豊富な車種と経験でお客様の物流課題をワンストップで解決します。',
    'services.card1.title': '一般貨物配送',
    'services.card1.body': '法人向け定期便・スポット便・緊急輸送まで対応。最適ルート設計とリアルタイム運行管理で納期厳守を実現します。',
    'services.card1.point1': '常温／チルド混載可・積み合わせ最適化',
    'services.card1.point2': 'GPS配車システムで運行状況を可視化',
    'services.card1.point3': '首都高夜間規制や大型商業施設の搬入にも対応',
    'services.card1.cta': '案件の相談をする',
    'services.card2.title': '建築資材配送',
    'services.card2.body': '鉄骨・木材・内装材など重量物や長尺物を経験豊富なドライバーチームが安全に搬入。現場工程に合わせた時間指定が可能です。',
    'services.card2.point1': '3tワイドゲート・ユニック車で現場搬入を効率化',
    'services.card2.point2': '搬入動線の事前調査と現場責任者との連携体制',
    'services.card2.point3': '養生・開梱・荷捌きサポートも柔軟に対応',
    'services.card2.cta': '導入事例を見る',
    'services.card3.title': '特殊車両対応',
    'services.card3.body': 'ゲート車・ユニック・ロング車など各種特殊車両で医療機器やイベント資材など繊細な商品の輸送にも対応します。',
    'services.card3.point1': '2t標準ゲート車／2tロングバン／3tワイドゲート車',
    'services.card3.point2': '資格保有ドライバーによる安全な積卸し作業',
    'services.card3.point3': '立会い・据付サポート等の付帯作業もワンストップ',
    'services.card3.cta': '車両ラインナップを見る',
    'services.case.title': 'ケーススタディ：建材メーカー様',
    'services.case.body': '都内大型商業施設の改修案件で3ヶ月間の夜間輸送を担当。3tゲート車3台体制で、遅延ゼロ・損傷ゼロを達成し搬入コストを25%削減しました。',
    'services.case.area.label': '対応エリア',
    'services.case.area.value': '東京23区・多摩地域・神奈川東部',
    'services.case.cargo.label': '荷姿',
    'services.case.cargo.value': '長尺木材・内装材・什器',
    'services.case.support.label': 'サポート内容',
    'services.case.support.value': '時間指定納品／現場立会い／養生作業',
    'fleet.title': '車両紹介',
    'fleet.lead': '案件に最適な車両を配備できるよう、2t〜3tクラスを中心にゲート・ロング・ユニックなど多彩な仕様を揃えています。',
    'fleet.card1.imageAlt': '2t標準ゲート車の車両写真',
    'fleet.card1.title': '2t 標準ゲート車',
    'fleet.card1.capacity.label': '積載量：',
    'fleet.card1.capacity.value': '2,000kg',
    'fleet.card1.feature.label': '特徴：',
    'fleet.card1.feature.value': 'ゲート付きで重量物の積卸しがスムーズ',
    'fleet.card1.use.label': '主な用途：',
    'fleet.card1.use.value': '建材・什器・家電の店舗配送',
    'fleet.card2.title': '2t 標準ロングバン',
    'fleet.card2.capacity.label': '積載量：',
    'fleet.card2.capacity.value': '2,000kg',
    'fleet.card2.feature.label': '特徴：',
    'fleet.card2.feature.value': 'ロングボディで長尺物や大量配送に最適',
    'fleet.card2.use.label': '主な用途：',
    'fleet.card2.use.value': 'イベント資材・展示会機材の輸送',
    'fleet.card3.title': '3t ワイドゲート車',
    'fleet.card3.capacity.label': '積載量：',
    'fleet.card3.capacity.value': '3,000kg',
    'fleet.card3.feature.label': '特徴：',
    'fleet.card3.feature.value': 'ワイドボディ＋ゲートで大型荷物も安全に搬入',
    'fleet.card3.use.label': '主な用途：',
    'fleet.card3.use.value': '大型什器・建築資材・医療機器',
    'fleet.cta.primary': '車両空き状況を問い合わせる',
    'fleet.cta.secondary': '車両ラインナップ表（PDF）',
    'recruit.title': '採用情報',
    'recruit.lead': '未経験からでもプロドライバーへ。資格取得支援制度でキャリアアップを後押しします。',
    'recruit.summary.heading': '募集概要',
    'recruit.summary.point1': '普通免許（AT限定可）からスタートOK／準中型免許取得支援あり',
    'recruit.summary.point2': '1日8時間ベース・残業ほぼなし・完全週休2日制',
    'recruit.summary.point3': '安全研修・同乗指導で安心して現場デビュー',
    'recruit.badge1': '未経験歓迎',
    'recruit.badge2': '資格取得支援',
    'recruit.badge3': '社宅補助あり',
    'recruit.cta.body': '社員インタビューや1日の働き方、福利厚生の詳細は採用サイトでご確認いただけます。',
    'recruit.cta.primary': '採用サイトを見る',
    'recruit.cta.secondary': '採用に関するお問い合わせ',
    'voices.title': 'お客様の声・導入事例',
    'voices.lead': '「納期どおり・安全に・サービス良く」をどのように実現しているのか。ご利用企業様のコメントをご紹介します。',
    'voices.testimonial1.body': '建築資材の夜間配送をお願いしています。現場との連携がスムーズで、搬入遅延がゼロになりました。ドライバーの方が工事工程を理解してくださっているのが心強いです。',
    'voices.testimonial1.author': '建設会社 物流管理ご担当者様',
    'voices.testimonial1.meta': '建築資材配送｜3tワイドゲート車｜東京23区',
    'voices.testimonial2.body': '店舗什器の定期配送を依頼。搬入先の条件にも柔軟に対応してくださり、夜間のスケジュール調整もお任せできるので助かっています。',
    'voices.testimonial2.author': '小売チェーン 店舗開発部様',
    'voices.testimonial2.meta': '一般貨物配送｜2tロングバン｜多摩地域',
    'voices.testimonial3.body': '機密性の高い医療機器の搬入で利用しています。事前の下見から据付補助まで一貫して対応いただき、院内での安全管理も徹底してくれます。',
    'voices.testimonial3.author': '医療機器メーカー ロジスティクス部様',
    'voices.testimonial3.meta': '特殊車両対応｜ユニック車｜神奈川県',
    'voices.carousel.dotLabel': '事例 {index}',
    'contact.title': 'お問い合わせ・見積もり依頼',
    'contact.lead': 'ご依頼内容・ご希望の納期・荷姿などをお知らせください。担当コーディネーターが最適な輸送プランをご提案します。',
    'contact.form.name.label': 'お名前',
    'contact.form.name.placeholder': '山田 太郎',
    'contact.form.company.label': '会社名',
    'contact.form.company.placeholder': '株式会社東京キャリイサービス',
    'contact.form.email.label': 'メールアドレス',
    'contact.form.email.placeholder': 'example@tokyocarry.jp',
    'contact.form.phone.label': '電話番号',
    'contact.form.phone.placeholder': '042-645-0090',
    'contact.form.datetime.label': '希望日時',
    'contact.form.message.label': 'ご依頼内容',
    'contact.form.message.placeholder': '荷物の種類・サイズ・納期・配送先などをご記入ください。',
    'contact.form.submit': '送信する',
    'contact.form.note': '※送信いただいた個人情報はプライバシーポリシーに基づき厳重に取り扱います。',
    'contact.form.feedback.error': '入力内容をご確認ください。必須項目が未入力です。',
    'contact.form.feedback.success': '送信が完了しました。担当者より1営業日以内にご連絡いたします。',
    'contact.sidebar.title': 'お電話でのご相談',
    'contact.sidebar.telnote': '（代表）',
    'contact.sidebar.hours': '受付時間：平日 9:00〜18:00／緊急対応は24時間',
    'contact.sidebar.email': 'メール：<a href="mailto:info@tokyo-carry-service.jp">info@tokyo-carry-service.jp</a>',
    'contact.sidebar.address': '所在地：〒192-0043 東京都八王子市大谷町282-3',
    'contact.map.title': 'アクセスマップ',
    'contact.sidebar.privacy': 'プライバシーポリシー',
    'footer.address': '〒192-0043 東京都八王子市大谷町282-3<br>TEL：<a href="tel:0426450090">042-645-0090</a>',
    'footer.menu.heading': 'サイトメニュー',
    'footer.menu.item1': 'サービス',
    'footer.menu.item2': '車両紹介',
    'footer.menu.item3': '採用情報',
    'footer.menu.item4': 'お問い合わせ',
    'footer.support.heading': 'サポート',
    'footer.support.item1': 'プライバシーポリシー',
    'footer.support.item2': 'サイトマップ',
    'footer.support.item3': '採用情報',
    'footer.social.heading': '公式アカウント',
    'footer.social.facebook': 'Facebook',
    'footer.social.x': 'X（旧Twitter）',
    'footer.social.scrollTop': 'ページトップへ',
    'footer.copyright': '© 2024 株式会社東京キャリイサービス All Rights Reserved.',
  },
  en: {
    'meta.title': 'Tokyo Carry Service Co., Ltd. | Logistics Partner in Greater Tokyo',
    'meta.description': 'Tokyo Carry Service delivers general cargo, building materials, and corporate logistics solutions across Greater Tokyo from our Hachioji base. We promise on-time, safe, service-driven transport.',
    'meta.ogTitle': 'Tokyo Carry Service Co., Ltd. | Logistics Partner in Greater Tokyo',
    'meta.ogDescription': 'Serving the Greater Tokyo region with general freight, construction material delivery, and specialised vehicle logistics. Reliable, safe, and on-time transportation.',
    'nav.logoLabel': 'Tokyo Carry Service home',
    'nav.menuToggle': 'Menu',
    'nav.menuToggleLabel': 'Toggle navigation',
    'nav.services': 'Services',
    'nav.company': 'About',
    'nav.fleet': 'Fleet',
    'nav.recruit': 'Careers',
    'nav.voices': 'Case Studies',
    'nav.contact': 'Contact',
    'nav.primaryCta': 'Request a Quote',
    'nav.langToggleLabel': 'Switch to Japanese version',
    'hero.kicker': 'Serving Greater Tokyo | Tokyo / Kanagawa / Saitama',
    'hero.title': 'Driving logistics at the frontline. On-time, safe, and service-driven - delivered to you.',
    'hero.description': 'From our Hachioji headquarters we cover the Tama area, central Tokyo, and the bay area. Night runs, early-morning drops, and large construction loads are handled 24/7 by our dedicated team.',
    'hero.ctaPrimary': 'Explore Our Services',
    'hero.ctaSecondary': 'View Careers',
    'hero.badge1': '20+ vehicles from light vans to 3-ton gate trucks',
    'hero.badge2': 'Emergency dispatch average response: 30 minutes',
    'hero.badge3': 'Zero accident record maintained for 3 consecutive years',
    'hero.metric1.label': 'Annual deliveries',
    'hero.metric2.label': 'On-time rate',
    'hero.metric3.label': 'Corporate clients',
    'hero.note.title': 'Latest success story',
    'hero.note.body': 'Introduced an overnight shuttle for a distribution centre, cutting inbound lead time by 38%. We aim to be No.1 in transport quality across Tama.',
    'hero.note.link': 'Read the case study',
    'company.title': 'About the Company',
    'company.lead': 'Our mission is to deliver corporate cargo with uncompromised quality. Based in Hachioji, we support supply chains throughout Greater Tokyo.',
    'company.profile.name.label': 'Company',
    'company.profile.name.value': 'Tokyo Carry Service Co., Ltd.',
    'company.profile.address.label': 'Address',
    'company.profile.address.value': '282-3 Oya-machi, Hachioji-shi, Tokyo 192-0043',
    'company.profile.area.label': 'Service area',
    'company.profile.area.value': 'Greater Tokyo (Tokyo / Kanagawa / Saitama)',
    'company.profile.business.label': 'Services',
    'company.profile.business.value': 'General cargo transport / Construction material delivery / B2B logistics solutions',
    'company.profile.hours.label': 'Availability',
    'company.profile.hours.value': '24/7 year-round (urgent, overnight, and early-morning shipping)',
    'company.profile.cta': 'Download company profile',
    'company.strengths.heading': 'Why clients choose us',
    'company.strengths.item1.title': 'Versatile vehicle line-up',
    'company.strengths.item1.desc': 'From 2t vans to 3t gate trucks and UNIC cranes for special cargo',
    'company.strengths.item2.title': '24/7 operations',
    'company.strengths.item2.desc': 'Flexible support for night loads, early drops, and timed delivery slots',
    'company.strengths.item3.title': 'Seasoned drivers',
    'company.strengths.item3.desc': 'Average tenure of 8 years with licensed specialists for hazardous and rigging work',
    'company.strengths.item4.title': 'Quality & safety culture',
    'company.strengths.item4.desc': 'Monthly safety workshops, dashcam reviews, and dispatch controls keep us incident-free',
    'company.map.note': '* Google Maps embed shown for reference. Contact us for detailed coverage.',
    'company.map.iframeTitle': 'Tokyo Carry Service HQ location',
    'services.title': 'Our Services',
    'services.lead': 'From general freight to heavy construction loads, our fleet and expertise solve your logistics challenges end-to-end.',
    'services.card1.title': 'General Freight',
    'services.card1.body': 'Regular routes, spot runs, and urgent deliveries with optimised routing and live tracking to secure on-time performance.',
    'services.card1.point1': 'Mixed ambient/chilled loads with load consolidation',
    'services.card1.point2': 'GPS dispatch platform provides real-time visibility',
    'services.card1.point3': 'Handles night highway restrictions and complex site access',
    'services.card1.cta': 'Talk to a specialist',
    'services.card2.title': 'Construction Materials',
    'services.card2.body': 'Experienced crews safely deliver steel, lumber, and interior materials with precise scheduling aligned to site workflows.',
    'services.card2.point1': '3t wide-gate and UNIC trucks streamline on-site unloading',
    'services.card2.point2': 'Pre-site surveys and coordination with site managers',
    'services.card2.point3': 'Protective sheeting, unpacking, and load handling on request',
    'services.card2.cta': 'See project examples',
    'services.card3.title': 'Specialty Vehicles',
    'services.card3.body': 'Gate, UNIC, and long-body trucks move sensitive goods such as medical devices and event fixtures with precision handling.',
    'services.card3.point1': '2t gate / 2t long vans / 3t wide gate trucks available',
    'services.card3.point2': 'Certified drivers execute safe loading and unloading',
    'services.card3.point3': 'Support for on-site supervision and equipment positioning',
    'services.card3.cta': 'View fleet line-up',
    'services.case.title': 'Case Study: Building Material Supplier',
    'services.case.body': 'Supported a three-month night delivery programme for a major commercial renovation. Three 3t gate trucks achieved zero delays and zero damage, cutting handling costs by 25%.',
    'services.case.area.label': 'Coverage',
    'services.case.area.value': 'Tokyo 23 wards / Tama area / Eastern Kanagawa',
    'services.case.cargo.label': 'Cargo',
    'services.case.cargo.value': 'Long lumber, interior materials, fixtures',
    'services.case.support.label': 'Support scope',
    'services.case.support.value': 'Timed delivery / On-site supervision / Protection work',
    'fleet.title': 'Fleet Overview',
    'fleet.lead': 'We deploy the right vehicle for every assignment, centered on 2-3t classes with gate, long-body, and UNIC specifications.',
    'fleet.card1.imageAlt': 'Photo of a 2-ton gate truck',
    'fleet.card1.title': '2t Gate Truck',
    'fleet.card1.capacity.label': 'Capacity:',
    'fleet.card1.capacity.value': '2,000 kg',
    'fleet.card1.feature.label': 'Highlights:',
    'fleet.card1.feature.value': 'Rear lift gate enables smooth handling of heavy cargo',
    'fleet.card1.use.label': 'Typical loads:',
    'fleet.card1.use.value': 'Building materials, fixtures, consumer appliances',
    'fleet.card2.title': '2t Long Van',
    'fleet.card2.capacity.label': 'Capacity:',
    'fleet.card2.capacity.value': '2,000 kg',
    'fleet.card2.feature.label': 'Highlights:',
    'fleet.card2.feature.value': 'Long body ideal for oversized or high-volume freight',
    'fleet.card2.use.label': 'Typical loads:',
    'fleet.card2.use.value': 'Event equipment and exhibition gear',
    'fleet.card3.title': '3t Wide Gate Truck',
    'fleet.card3.capacity.label': 'Capacity:',
    'fleet.card3.capacity.value': '3,000 kg',
    'fleet.card3.feature.label': 'Highlights:',
    'fleet.card3.feature.value': 'Wide body plus gate handle bulky, heavy cargo safely',
    'fleet.card3.use.label': 'Typical loads:',
    'fleet.card3.use.value': 'Large fixtures, construction supplies, medical devices',
    'fleet.cta.primary': 'Check vehicle availability',
    'fleet.cta.secondary': 'Download fleet list (PDF)',
    'recruit.title': 'Careers',
    'recruit.lead': 'We develop professional drivers from day one. Licensing support and structured training accelerate your growth.',
    'recruit.summary.heading': 'Role highlights',
    'recruit.summary.point1': 'Start with a standard licence (AT ok) - we fund further licences',
    'recruit.summary.point2': '8-hour shifts, minimal overtime, guaranteed two days off weekly',
    'recruit.summary.point3': 'Safety training and ride-alongs ensure a confident debut',
    'recruit.badge1': 'Entry-level welcome',
    'recruit.badge2': 'Licence support',
    'recruit.badge3': 'Housing allowance',
    'recruit.cta.body': 'Interviews, day-in-the-life stories, and benefit details are available on the careers site.',
    'recruit.cta.primary': 'Visit careers site',
    'recruit.cta.secondary': 'Contact careers team',
    'voices.title': 'Client Voices & Case Studies',
    'voices.lead': 'Discover how we fulfil "on-time, safe, service-first" logistics through feedback from our corporate partners.',
    'voices.testimonial1.body': 'We rely on TCS for night deliveries of construction materials. Coordination is seamless and delays have dropped to zero. Their drivers understand site workflows, which is invaluable.',
    'voices.testimonial1.author': 'Construction company · Logistics Manager',
    'voices.testimonial1.meta': 'Construction materials · 3t wide gate · Tokyo 23 wards',
    'voices.testimonial2.body': 'They handle our store fixtures on a recurring basis and adapt to requirements at each location. Night scheduling and handovers are effortless thanks to their support.',
    'voices.testimonial2.author': 'Retail chain · Store Development',
    'voices.testimonial2.meta': 'General freight · 2t long van · Tama area',
    'voices.testimonial3.body': 'We entrust them with sensitive medical equipment. From site surveys to installation assistance, they manage everything while maintaining strict safety protocols inside hospitals.',
    'voices.testimonial3.author': 'Medical device manufacturer · Logistics Dept.',
    'voices.testimonial3.meta': 'Specialty vehicle · UNIC truck · Kanagawa',
    'voices.carousel.dotLabel': 'Case {index}',
    'contact.title': 'Contact & Quote Request',
    'contact.lead': 'Share your cargo details, delivery timeline, and destination. Our coordinators will propose the optimal transport plan.',
    'contact.form.name.label': 'Name',
    'contact.form.name.placeholder': 'Taro Yamada',
    'contact.form.company.label': 'Company',
    'contact.form.company.placeholder': 'Tokyo Carry Service Co., Ltd.',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'example@tokyocarry.jp',
    'contact.form.phone.label': 'Phone',
    'contact.form.phone.placeholder': '+81-42-645-0090',
    'contact.form.datetime.label': 'Preferred date & time',
    'contact.form.message.label': 'Project details',
    'contact.form.message.placeholder': 'Cargo type, size, delivery deadline, destination, and any special requirements.',
    'contact.form.submit': 'Send message',
    'contact.form.note': '* Personal information will be handled securely under our privacy policy.',
    'contact.form.feedback.error': 'Please review your entries. Required fields are missing.',
    'contact.form.feedback.success': 'Thank you. Our team will respond within one business day.',
    'contact.sidebar.title': 'Call Us',
    'contact.sidebar.telnote': '(main line)',
    'contact.sidebar.hours': 'Service hours: Weekdays 9:00-18:00 / Emergency support 24/7',
    'contact.sidebar.email': 'Email: <a href="mailto:info@tokyo-carry-service.jp">info@tokyo-carry-service.jp</a>',
    'contact.sidebar.address': 'Address: 282-3 Oya-machi, Hachioji-shi, Tokyo 192-0043',
    'contact.map.title': 'Access map',
    'contact.sidebar.privacy': 'Privacy Policy',
    'footer.address': '282-3 Oya-machi, Hachioji-shi, Tokyo 192-0043<br>TEL: <a href="tel:0426450090">+81-42-645-0090</a>',
    'footer.menu.heading': 'Site Menu',
    'footer.menu.item1': 'Services',
    'footer.menu.item2': 'Fleet',
    'footer.menu.item3': 'Careers',
    'footer.menu.item4': 'Contact',
    'footer.support.heading': 'Support',
    'footer.support.item1': 'Privacy Policy',
    'footer.support.item2': 'Sitemap',
    'footer.support.item3': 'Careers',
    'footer.social.heading': 'Official Channels',
    'footer.social.facebook': 'Facebook',
    'footer.social.x': 'X (formerly Twitter)',
    'footer.social.scrollTop': 'Back to Top',
    'footer.copyright': '© 2024 Tokyo Carry Service Co., Ltd. All Rights Reserved.',
  },
};

const NUMBER_SUFFIXES = {
  'hero.metric1.value': { ja: '件', en: ' shipments/year' },
  'hero.metric2.value': { ja: '%', en: '%' },
  'hero.metric3.value': { ja: '社', en: ' clients' },
};

const LANG_STORAGE_KEY = 'tcs-site-lang';
const SUPPORTED_LANGS = ['ja', 'en'];

document.documentElement.classList.add('js');

ready(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const resolveLang = (lang) => (SUPPORTED_LANGS.includes(lang) ? lang : 'ja');
  let currentLang = resolveLang(
    localStorage.getItem(LANG_STORAGE_KEY) ||
      document.documentElement.getAttribute('lang') ||
      'ja',
  );

  const getTranslation = (key, lang = currentLang) =>
    I18N_STRINGS[lang]?.[key] ?? I18N_STRINGS.ja?.[key] ?? '';

  const applyNumberLocales = (lang) => {
    document.querySelectorAll('[data-i18n-number]').forEach((el) => {
      const key = el.dataset.i18nNumber;
      const suffixMap = NUMBER_SUFFIXES[key];
      if (!suffixMap) return;
      const suffix = suffixMap[lang] ?? suffixMap.ja ?? '';
      el.dataset.countSuffix = suffix;
      const prefix = el.dataset.countPrefix || '';
      const value = Number(el.dataset.count || el.textContent || 0);
      if (Number.isFinite(value)) {
        el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      }
    });
  };

  const updateMeta = (lang) => {
    const title = getTranslation('meta.title', lang);
    if (title) document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const desc = getTranslation('meta.description', lang);
    if (metaDescription && desc) {
      metaDescription.setAttribute('content', desc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogTitleText = getTranslation('meta.ogTitle', lang);
    const ogDescText = getTranslation('meta.ogDescription', lang);
    if (ogTitle && ogTitleText) ogTitle.setAttribute('content', ogTitleText);
    if (ogDesc && ogDescText) ogDesc.setAttribute('content', ogDescText);
  };

  const applyLanguage = (lang) => {
    currentLang = resolveLang(lang);
    document.documentElement.setAttribute('lang', currentLang === 'en' ? 'en' : 'ja');
    document.body.dataset.lang = currentLang;
    localStorage.setItem(LANG_STORAGE_KEY, currentLang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (!key) return;
      const attr = el.dataset.i18nAttr || 'text';
      const value = getTranslation(key, currentLang);
      if (value == null) return;
      if (attr === 'text') {
        el.textContent = value;
      } else if (attr === 'html') {
        el.innerHTML = value;
      } else {
        el.setAttribute(attr, value);
      }
    });

    applyNumberLocales(currentLang);
    updateMeta(currentLang);

    const langToggleButton = document.querySelector('[data-lang-toggle]');
    if (langToggleButton) {
      langToggleButton.textContent = currentLang === 'en' ? 'JP' : 'EN';
      langToggleButton.setAttribute('aria-label', getTranslation('nav.langToggleLabel', currentLang));
      langToggleButton.setAttribute('aria-pressed', currentLang === 'en' ? 'true' : 'false');
    }
  };

  applyLanguage(currentLang);

  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open', !expanded);
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  const scrollTopButton = document.querySelector('[data-scroll-top]');
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  }

  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => el.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10%' },
      );

      revealTargets.forEach((el) => observer.observe(el));
    }
  }

  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const animateCounter = (el) => {
      const target = Number(el.dataset.count || 0);
      if (!Number.isFinite(target)) return;
      const prefix = el.dataset.countPrefix || '';
      const suffix = el.dataset.countSuffix || '';
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = `${prefix}${formatNumber(current)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      counters.forEach((el) => {
        const target = Number(el.dataset.count || el.textContent || 0);
        if (!Number.isFinite(target)) return;
        const prefix = el.dataset.countPrefix || '';
        const suffix = el.dataset.countSuffix || '';
        el.textContent = `${prefix}${formatNumber(target)}${suffix}`;
      });
    } else {
      const counterObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.6 },
      );

      counters.forEach((el) => counterObserver.observe(el));
    }
  }

  const carouselRoot = document.querySelector('[data-carousel]');
  if (carouselRoot) {
    const track = carouselRoot.querySelector('[data-carousel-track]');
    const slides = track ? Array.from(track.children) : [];
    const prevButton = carouselRoot.querySelector('[data-carousel-prev]');
    const nextButton = carouselRoot.querySelector('[data-carousel-next]');
    const dotsContainer = carouselRoot.querySelector('[data-carousel-dots]');
    let activeIndex = 0;
    let autoTimer = null;
    const autoDelay = 9000;

    const buildDotLabel = (index, lang = currentLang) =>
      (getTranslation('voices.carousel.dotLabel', lang) || 'Case {index}').replace(
        '{index}',
        String(index + 1),
      );

    const updateDots = () => {
      if (!dotsContainer) return;
      dotsContainer.querySelectorAll('button').forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.setAttribute('aria-selected', String(isActive));
        dot.tabIndex = isActive ? 0 : -1;
        dot.setAttribute('aria-label', buildDotLabel(index));
      });
    };

    const showSlide = (index, isManual = false) => {
      if (!slides.length) return;
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === activeIndex);
        slide.setAttribute('aria-hidden', slideIndex === activeIndex ? 'false' : 'true');
      });
      updateDots();
      if (isManual) restartAuto();
    };

    const restartAuto = () => {
      if (prefersReducedMotion || !slides.length) return;
      clearTimeout(autoTimer);
      autoTimer = window.setTimeout(() => {
        showSlide(activeIndex + 1);
      }, autoDelay);
    };

    if (dotsContainer && slides.length > 1) {
      dotsContainer.innerHTML = '';
      slides.forEach((_slide, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'testimonials__dot';
        dot.setAttribute('aria-label', buildDotLabel(index));
        dot.dataset.index = String(index);
        dot.addEventListener('click', () => showSlide(index, true));
        const wrapper = document.createElement('li');
        wrapper.appendChild(dot);
        dotsContainer.appendChild(wrapper);
      });
    }

    prevButton?.addEventListener('click', () => showSlide(activeIndex - 1, true));
    nextButton?.addEventListener('click', () => showSlide(activeIndex + 1, true));

    carouselRoot.addEventListener('pointerenter', () => {
      if (autoTimer) {
        clearTimeout(autoTimer);
      }
    });

    carouselRoot.addEventListener('pointerleave', () => {
      restartAuto();
    });

    showSlide(0);
    restartAuto();

    document.addEventListener('languagechange', () => {
      updateDots();
    });
  }

  const langToggleButton = document.querySelector('[data-lang-toggle]');
  if (langToggleButton) {
    langToggleButton.addEventListener('click', () => {
      currentLang = currentLang === 'ja' ? 'en' : 'ja';
      applyLanguage(currentLang);
      document.dispatchEvent(new Event('languagechange'));
    });
  }

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const feedback = contactForm.querySelector('[data-feedback]');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        if (feedback) {
          feedback.textContent = getTranslation('contact.form.feedback.error');
          feedback.classList.add('is-error');
          feedback.classList.remove('is-success');
        }
        return;
      }

      if (feedback) {
        feedback.textContent = getTranslation('contact.form.feedback.success');
        feedback.classList.add('is-success');
        feedback.classList.remove('is-error');
      }

      contactForm.reset();
    });
  }
});
