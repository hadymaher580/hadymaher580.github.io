/* نماذج تنسيق المذكرات — محتوى تجريبي لعرض التنسيق */
window.NB = (() => {
const pg = (b, label, num, html) => `<div class="pg${b.ltr ? " ltr" : ""}" style="--pc:${b.pc};--acc:${b.acc}"><div class="ph"><b>${b.series}</b><span>${label}</span></div><div class="pb">${html}</div><div class="pf"><span>${b.teacher}</span><i>${num}</i></div></div>`;
const cover = (b, title, sub, extra = "") => `<div class="pg cover${b.ltr ? " ltr" : ""}" style="--pc:${b.pc};--acc:${b.acc}">${b.orn || ""}<div><div class="ser">${b.series}</div><h4>${title}</h4><div class="sub">${sub}</div>${extra}</div><div class="who">${b.ltr ? "Prepared by" : "إعداد"}<b>${b.teacher}</b>${b.ltr ? "Sample content for layout" : "محتوى تجريبي لعرض التنسيق"}</div></div>`;
const orn = (paths) => `<svg class="orn" viewBox="0 0 100 100"><g fill="none" stroke="#fff" stroke-width="1.2">${paths}</g></svg>`;
const mcq = (n, q, o) => `<div class="q"><i>${n}</i><div>${q}<div class="opts">${o.map(x => `<span>${x}</span>`).join("")}</div></div></div>`;
const dots = (k = 2) => '<div class="dots"></div>'.repeat(k);

const hant = { series: "الحنتوشي — جنرال التاريخ", teacher: "أ/ محمد الحنتوشي", pc: "#0E5A4E", acc: "#C8102E" };
const nahw = { series: "سلسلة المنار", teacher: "أ/ أحمد عبد الرحمن", pc: "#3B1D7A", acc: "#E46CFF", orn: orn('<circle cx="50" cy="50" r="46"/><circle cx="50" cy="50" r="34"/><path d="M50 4v92M4 50h92M17 17l66 66M83 17 17 83"/>') };
const athar = { series: "سلسلة الأثر", teacher: "أ/ محمود فؤاد", pc: "#7A2E1F", acc: "#D9A441", orn: orn('<path d="M10 90h80M20 90V40l30-26 30 26v50M35 90V60h30v30"/>') };
const math = { series: "سلسلة المتفوق", teacher: "أ/ كريم سامي", pc: "#23257A", acc: "#F2A81D", orn: orn('<path d="M15 80 50 15l35 65zM30 52h40"/><circle cx="50" cy="58" r="14"/>') };
const phys = { series: "سلسلة نيوتن", teacher: "أ/ مصطفى عادل", pc: "#0B4F8A", acc: "#FF7A1A", orn: orn('<ellipse cx="50" cy="50" rx="44" ry="16"/><ellipse cx="50" cy="50" rx="44" ry="16" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="44" ry="16" transform="rotate(120 50 50)"/><circle cx="50" cy="50" r="5"/>') };
const eng = { series: "Smart Steps", teacher: "Mr. Youssef Kamal", pc: "#5B1A8E", acc: "#FFB300", ltr: true, orn: orn('<path d="M10 80h80M18 80V30h16v50M42 80V18h16v62M66 80V42h16v38"/>') };
const kids = { series: "حروفي الجميلة", teacher: "أ/ سارة محمود", pc: "#E2572C", acc: "#2FA866", orn: orn('<circle cx="30" cy="30" r="14"/><circle cx="70" cy="40" r="10"/><circle cx="45" cy="72" r="18"/>') };

const H = [
cover({ ...hant, orn: "" }, "التاريخ", "الصف الأول الثانوي — الترم الأول", `<div class="wm"><img src="assets/identity/wordmark.webp" alt=""></div>`),
pg(hant, "الوحدة الأولى", 1, `<h4>مصر الفرعونية: توحيد القطرين</h4><p>قبل التوحيد كانت مصر مقسّمة إلى مملكتين: <mark>الوجه البحري</mark> في الشمال و<mark>الوجه القبلي</mark> في الجنوب، حتى نجح الملك مينا (نعرمر) في توحيدهما نحو عام 3200 ق.م.</p><div class="box"><span class="tag">معلومة مهمة</span>اتخذ مينا لقب «ملك الأرضين» ولبس التاج المزدوج رمزًا لوحدة البلاد.</div><h5>نتائج التوحيد</h5><table><tr><th>المجال</th><th>النتيجة</th></tr><tr><td>السياسي</td><td>قيام أول دولة مركزية في التاريخ</td></tr><tr><td>الإداري</td><td>تأسيس عاصمة جديدة هي منف</td></tr><tr><td>الحضاري</td><td>ازدهار الكتابة والفنون والعمارة</td></tr></table><div class="box warn"><span class="tag">سؤال امتحان</span>علّل: يُعدّ الملك مينا مؤسس الأسرة الأولى.</div>`),
pg(hant, "خريطة الدرس", 2, `<h4>عصور الدولة المصرية القديمة</h4><div class="tl"><div><b>الدولة القديمة</b> — عصر بناة الأهرام، وأشهرها هرم خوفو بالجيزة</div><div><b>الدولة الوسطى</b> — اهتمام بالزراعة والري ومشروعات الفيوم</div><div><b>الدولة الحديثة</b> — عصر الإمبراطورية والفتوحات الحربية</div></div><div class="center">جنرال التاريخ بيلخّصهالك</div><div class="map"><div><b>الملك</b>رأس الدولة والقائد الأعلى</div><div><b>الوزير</b>يدير شؤون البلاد</div><div><b>حكام الأقاليم</b>إدارة محلية</div></div>`),
pg(hant, "اختبر نفسك", 3, `<h4>أسئلة على الدرس</h4>${mcq(1, "وحّد مصر الملك:", ["خوفو", "مينا", "أحمس", "تحتمس"])}${mcq(2, "عاصمة مصر بعد التوحيد:", ["طيبة", "منف", "الإسكندرية", "أخيتاتون"])}${mcq(3, "عُرف عصر الدولة القديمة بعصر:", ["الإمبراطورية", "بناة الأهرام", "الاضمحلال", "الهكسوس"])}<h5>علّل لما يأتي</h5><p>لُقّب الملك مينا بلقب «ملك الأرضين».</p>${dots(2)}<div class="center">عاش يا بطل</div>`),
];
const N = [
cover(nahw, "النحو", "الصف الثالث الإعدادي — الترم الأول"),
pg(nahw, "الدرس الأول", 1, `<h4>المبتدأ والخبر</h4><p>الجملة الاسمية تبدأ باسم، وتتكوّن من ركنين: <mark>المبتدأ</mark> وهو المتحدَّث عنه، و<mark>الخبر</mark> وهو ما يتمّ به المعنى.</p><div class="box"><span class="tag">القاعدة</span>المبتدأ اسم مرفوع يقع في أول الجملة غالبًا، والخبر اسم مرفوع يكمل معناه.</div><h5>أمثلة توضيحية</h5><table><tr><th>الجملة</th><th>المبتدأ</th><th>الخبر</th></tr><tr><td>العلمُ نورٌ</td><td>العلمُ</td><td>نورٌ</td></tr><tr><td>الطالبانِ مجتهدانِ</td><td>الطالبانِ</td><td>مجتهدانِ</td></tr><tr><td>المعلمونَ مخلصونَ</td><td>المعلمونَ</td><td>مخلصونَ</td></tr></table><div class="box warn"><span class="tag">انتبه</span>علامة رفع المثنى الألف، وجمع المذكر السالم الواو.</div>`),
pg(nahw, "تدريبات", 2, `<h4>اختبر نفسك</h4>${mcq(1, "المبتدأ في «الكتابُ مفيدٌ»:", ["مفيدٌ", "الكتابُ", "الجملة كلها", "لا يوجد"])}${mcq(2, "علامة رفع «المهندسون»:", ["الضمة", "الألف", "الواو", "الياء"])}${mcq(3, "نوع الخبر في «الحديقةُ أزهارُها جميلة»:", ["مفرد", "جملة اسمية", "جملة فعلية", "شبه جملة"])}<h5>أعرب ما تحته خط</h5><p>الصدقُ <u>منجاةٌ</u>.</p>${dots(2)}<div class="center">بالتوفيق يا بطل</div>`),
pg(nahw, "ملخص الدرس", 3, `<h4>علامات الرفع</h4><table><tr><th>النوع</th><th>العلامة</th><th>مثال</th></tr><tr><td>المفرد</td><td>الضمة</td><td>الوطنُ غالٍ</td></tr><tr><td>المثنى</td><td>الألف</td><td>اللاعبانِ ماهرانِ</td></tr><tr><td>جمع المذكر السالم</td><td>الواو</td><td>المسلمونَ متحدونَ</td></tr><tr><td>الأسماء الخمسة</td><td>الواو</td><td>أبوك كريمٌ</td></tr></table><div class="center">خريطة الدرس</div><div class="map"><div><b>المبتدأ</b>اسم مرفوع في أول الجملة</div><div><b>الخبر</b>يتمّ به المعنى</div><div><b>أنواعه</b>مفرد — جملة — شبه جملة</div></div>`),
];
const A = [
cover(athar, "التاريخ", "الصف الثاني الثانوي"),
pg(athar, "الفصل الثالث", 14, `<h4>محمد علي وبناء الدولة الحديثة</h4><p>تولّى محمد علي حكم مصر عام 1805، وبدأ مشروعًا شاملًا لتحديث الجيش والتعليم والاقتصاد.</p><h5>خط زمني</h5><div class="tl"><div><b>1805</b> — تولّي محمد علي حكم مصر</div><div><b>1811</b> — التخلص من المماليك</div><div><b>1826</b> — إرسال البعثات العلمية إلى أوروبا</div></div><div class="box"><span class="tag">مصطلح</span><b>البعثات العلمية:</b> طلاب أُرسلوا للتعلّم في أوروبا ونقل العلوم إلى مصر.</div>`),
pg(athar, "ملخص الفصل", 15, `<h4>خريطة ذهنية</h4><div class="center">بناء الدولة الحديثة</div><div class="map"><div><b>الجيش</b>تجنيد المصريين ومدارس حربية</div><div><b>التعليم</b>مدارس عليا وبعثات</div><div><b>الزراعة</b>قناطر وترع ومحاصيل جديدة</div><div><b>الصناعة</b>مصانع النسيج والسلاح</div><div><b>التجارة</b>نظام الاحتكار</div><div><b>الإدارة</b>تقسيم إداري جديد</div></div>`),
pg(athar, "تدريبات الفصل", 16, `<h4>أسئلة على الفصل</h4>${mcq(1, "تولّى محمد علي حكم مصر عام:", ["1798", "1805", "1811", "1840"])}${mcq(2, "من أهداف البعثات العلمية:", ["نقل العلوم", "التجارة", "الحرب", "السياحة"])}<h5>علّل لما يأتي</h5><p>اهتمام محمد علي بالزراعة.</p>${dots(2)}`),
];
const M = [
cover(math, "الجبر", "الصف الأول الثانوي — الترم الأول"),
pg(math, "الدرس الرابع", 22, `<h4>حل معادلة الدرجة الثانية</h4><p>الصورة العامة: <mark dir="ltr">ax² + bx + c = 0</mark> حيث a ≠ 0.</p><div class="box"><span class="tag">القانون العام</span><div class="eq" dir="ltr">x = ( −b ± √(b² − 4ac) ) ÷ 2a</div></div><h5>مثال محلول</h5><p>حل المعادلة: <span dir="ltr">x² − 5x + 6 = 0</span></p><table><tr><th>الخطوة</th><th>الحل</th></tr><tr><td>تحديد المعاملات</td><td dir="ltr">a = 1 , b = −5 , c = 6</td></tr><tr><td>المميز</td><td dir="ltr">b² − 4ac = 25 − 24 = 1</td></tr><tr><td>الجذران</td><td dir="ltr">x = 3 , x = 2</td></tr></table><div class="box warn"><span class="tag">انتبه</span>لو المميز سالب، المعادلة ليس لها جذور حقيقية.</div>`),
pg(math, "جدول المميز", 23, `<h4>نوع الجذرين من المميز</h4><table><tr><th>قيمة المميز</th><th>نوع الجذرين</th></tr><tr><td>موجب</td><td>جذران حقيقيان مختلفان</td></tr><tr><td>صفر</td><td>جذران حقيقيان متساويان</td></tr><tr><td>سالب</td><td>لا توجد جذور حقيقية</td></tr></table><div class="map"><div><b>التحليل</b>لما تكون المعادلة سهلة</div><div><b>القانون العام</b>يصلح لكل المعادلات</div><div><b>الرسم البياني</b>تقاطع المنحنى مع محور السينات</div></div><div class="center">ركّز على المميز</div>`),
pg(math, "تمارين", 24, `<h4>حل بنفسك</h4>${mcq(1, `جذرا المعادلة <span dir="ltr">x² − 9 = 0</span>:`, ["3 فقط", "±3", "9", "لا يوجد"])}${mcq(2, `المميز للمعادلة <span dir="ltr">x² + 2x + 5 = 0</span>:`, ["−16", "16", "24", "0"])}<h5>أوجد مجموعة الحل</h5><p dir="ltr" style="text-align:right">2x² − 7x + 3 = 0</p>${dots(3)}`),
];
const P = [
cover(phys, "الفيزياء", "الصف الثاني الثانوي"),
pg(phys, "الفصل الأول", 6, `<h4>قوانين نيوتن للحركة</h4><div class="box"><span class="tag">القانون الأول</span>الجسم الساكن يظل ساكنًا، والمتحرك يظل متحركًا بسرعة منتظمة في خط مستقيم ما لم تؤثر عليه قوة محصّلة.</div><div class="box"><span class="tag">القانون الثاني</span>القوة المحصّلة = الكتلة × العجلة<div class="eq" dir="ltr">F = m × a</div></div><div class="box"><span class="tag">القانون الثالث</span>لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه.</div>`),
pg(phys, "مثال وجدول", 7, `<h4>مثال محلول</h4><p>جسم كتلته 2 kg يتحرك بعجلة 3 m/s². احسب القوة المؤثرة.</p><div class="box"><span class="tag">الحل</span><div class="eq" dir="ltr">F = 2 × 3 = 6 N</div></div><h5>الكميات ووحدات القياس</h5><table><tr><th>الكمية</th><th>الرمز</th><th>الوحدة</th></tr><tr><td>القوة</td><td>F</td><td>نيوتن N</td></tr><tr><td>الكتلة</td><td>m</td><td>كيلوجرام kg</td></tr><tr><td>العجلة</td><td>a</td><td>m/s²</td></tr></table>`),
pg(phys, "اختبر نفسك", 8, `<h4>أسئلة</h4>${mcq(1, "وحدة قياس القوة:", ["جول", "نيوتن", "وات", "باسكال"])}${mcq(2, "إذا تضاعفت القوة مع ثبات الكتلة فإن العجلة:", ["تقل للنصف", "تتضاعف", "لا تتغير", "تنعدم"])}<h5>اذكر مثالًا من حياتك على القانون الثالث</h5>${dots(3)}`),
];
const E = [
cover(eng, "English", "Grade 9 — First term"),
pg(eng, "Unit 3", 31, `<h4>The Present Perfect</h4><div class="box"><span class="tag">Form</span>have / has + past participle (V3)</div><h5>Examples</h5><table><tr><th>Subject</th><th>have / has</th><th>V3</th></tr><tr><td>I / You / We / They</td><td>have</td><td>finished</td></tr><tr><td>He / She / It</td><td>has</td><td>visited</td></tr></table><div class="box warn"><span class="tag">Remember</span>Use <b>since</b> with a point in time and <b>for</b> with a period of time.</div>`),
pg(eng, "Key words", 32, `<h4>Signal words</h4><div class="map"><div><b>already</b>I have already done it.</div><div><b>yet</b>Have you finished yet?</div><div><b>just</b>She has just arrived.</div><div><b>since</b>since 2020</div><div><b>for</b>for two years</div><div><b>ever / never</b>Have you ever…?</div></div><div class="center">Smart tip</div><p>Don't use the present perfect with a finished time like <i>yesterday</i> or <i>last year</i>.</p>`),
pg(eng, "Practice", 33, `<h4>Choose the correct answer</h4>${mcq(1, "She ___ her homework already.", ["has done", "did", "have done", "does"])}${mcq(2, "They have lived here ___ 2019.", ["for", "since", "ago", "yet"])}<h5>Correct the mistake</h5><p>I have seen him yesterday.</p>${dots(2)}`),
];
const K = [
cover(kids, "حرف الباء", "الصف الأول الابتدائي"),
pg(kids, "تعلّم الحرف", 5, `<h4>حرف الباء «ب»</h4><div class="big-letters"><span>ب</span><span>بـ</span><span>ـبـ</span><span>ـب</span></div><h5>كلمات بحرف الباء</h5><div class="kw"><span>باب</span><span>بطة</span><span>بيت</span><span>كتاب</span></div><div class="box"><span class="tag">لاحظ</span>حرف الباء له نقطة واحدة تحته.</div>`),
pg(kids, "أكتب بنفسي", 6, `<h4>أتتبّع الحرف</h4><div class="trace"><span>ب</span><span>ب</span><span>ب</span><span>ب</span><span>ب</span></div><div class="trace"><span>بـ</span><span>بـ</span><span>بـ</span><span>بـ</span><span>بـ</span></div><h5>أكمل الكلمة بحرف الباء</h5><div class="kw blank"><span>..اب</span><span>..طة</span><span>كتا..</span></div>`),
pg(kids, "أنشطة", 7, `<h4>أصل الكلمة بالحرف</h4><div class="match"><div><span>بيت</span><span>ب</span></div><div><span>تفاحة</span><span>ت</span></div><div><span>ثعلب</span><span>ث</span></div></div><h5>ألوّن الكلمات اللي فيها حرف الباء</h5><div class="kw"><span>بحر</span><span>شمس</span><span>بنت</span><span>قلم</span><span>لبن</span></div><div class="center">برافو عليك</div>`),
];
return [
 { name: ["الحنتوشي — التاريخ", "El-Hantoshy — History"], pages: H },
 { name: ["النحو — سلسلة المنار", "Arabic grammar"], pages: N },
 { name: ["الجبر — سلسلة المتفوق", "Algebra"], pages: M },
 { name: ["الفيزياء — سلسلة نيوتن", "Physics"], pages: P },
 { name: ["English — Smart Steps", "English — Smart Steps"], pages: E, ltr: true },
 { name: ["ابتدائي — حروفي الجميلة", "Primary — Letters"], pages: K },
 { name: ["التاريخ — سلسلة الأثر", "History — Al-Athar"], pages: A },
];
})();
