// 页面切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化
    initNavigation();
    loadPhotographyContent();
    loadMusicalsContent();
    loadNovelsContent();
    
    // 监听滚动，实现导航栏高亮
    window.addEventListener('scroll', handleScroll);
});

// 初始化导航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标section
            const targetSection = this.getAttribute('data-section');
            
            // 更新导航激活状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容显示
            switchContent(targetSection);
            
            // 如果是小屏幕，滚动到内容区域
            if (window.innerWidth < 768) {
                const contentContainer = document.querySelector('.content-container');
                contentContainer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// 切换内容显示
function switchContent(sectionId) {
    // 隐藏所有内容区域
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示目标内容区域
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// 滚动到内容区域
function scrollToContent() {
    const nav = document.getElementById('nav');
    nav.scrollIntoView({ behavior: 'smooth' });
}

// 处理滚动事件
function handleScroll() {
    const nav = document.getElementById('nav');
    const coverHeight = document.querySelector('.cover').offsetHeight;
    
    // 当滚动超过封面区域时，为导航栏添加背景
    if (window.scrollY > coverHeight - 100) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
}

// 加载摄影内容
function loadPhotographyContent() {
    const photoGrid = document.getElementById('photo-grid');
    
    if (!photoGrid) return;
    
    const photos = [
        {
            id: 1,
            title: '阿宅的恋爱真难',
            image: 'bfb7e3d9fbc341817b0a86d5efde7779.jpg'
        },
        {
            id: 2,
            title: '燕云十六声',
            image: '73275ae00a9192f0f2241ed07a6d6ff7.jpg'
        },
        {
            id: 3,
            title: '名侦探柯南',
            image: 'e5b17c1faa13c4b3589a1169f1c8bc63.jpg'
        },
        {
            id: 4,
            title: '鬼灭之刃',
            image: '307f15f4ed7f7ae07298845c9718f9ab.jpg'
        },
        {
            id: 5,
            title: '第五人格',
            image: '74933e1c23ee4aaa49957654615984f6.jpg'
        },
        {
            id: 6,
            title: '家庭教师',
            image: 'bb83a0cc5388f15941769240331f6011.jpg'
        }
    ];
    
    // 清空现有内容
    photoGrid.innerHTML = '';
    
    // 创建摄影卡片
    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        
        photoCard.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" class="photo-img">
            <div class="photo-info">
                <h3 class="photo-title">${photo.title}</h3>
            </div>
        `;
        
        photoGrid.appendChild(photoCard);
    });
}

// 加载音乐剧内容
function loadMusicalsContent() {
    const musicalContainer = document.getElementById('musical-container');
    
    if (!musicalContainer) return;
    
    const musicals = [
        {
            id: 1,
            title: '歌剧魅影',
            subtitle: 'The Phantom of the Opera',
            description: '巴黎歌剧院的地下深处，住着一位相貌丑陋却天赋异禀的音乐天才。他爱上了一位年轻的女演员克里斯汀，并暗中指导她的歌唱。当克里斯汀与剧院赞助人拉乌尔相爱时，魅影的嫉妒引发了悲剧。这部音乐剧以其华丽的舞台设计和动人的音乐闻名，是音乐剧史上最成功的作品之一。',
            image: 'https://p1.ssl.qhimg.com/t01d3a6320913de43f2.jpg',
            composer: '安德鲁·劳埃德·韦伯',
            year: '1986',
            duration: '2小时30分钟',
            country: '英国',
            style: '传统音乐剧'
        },
        {
            id: 2,
            title: '伊丽莎白',
            subtitle: 'Elisabeth',
            description: '奥地利皇后伊丽莎白（茜茜公主）的传奇一生。音乐剧以死神的角度讲述茜茜公主从巴伐利亚公主到奥地利皇后，再到失去儿子后的自我放逐的人生历程。剧中探讨了权力、爱情、自由与死亡等主题，是德语音乐剧中最成功的作品之一，曾获得多个音乐剧奖项。',
            image: 'https://ts1.tc.mm.bing.net/th/id/R-C.e3b13fddc81a4bb2600b984cfd2860d5?rik=%2bx2fSaoWjYTmgg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181211%2f9d4af4fc175b4a58825edb4e1d21c00b.jpeg&ehk=acAgugSeG8nqVHPPoY5FoT0OKxfheFoYBgmg4LNse9w%3d&risl=&pid=ImgRaw&r=0',
            composer: '西尔维斯特·里维',
            year: '1992',
            duration: '2小时40分钟',
            country: '奥地利/德国',
            style: '史诗音乐剧'
        },
        {
            id: 3,
            title: '汉密尔顿',
            subtitle: 'Hamilton',
            description: '用嘻哈音乐讲述美国开国元勋亚历山大·汉密尔顿的传奇人生。这部音乐剧打破了传统音乐剧的形式，将历史与现代音乐风格巧妙融合，探讨了革命、遗产和历史的主题。自2015年首演以来，它迅速成为文化现象，获得了无数奖项和赞誉，包括11项托尼奖和普利策戏剧奖。',
            image: 'https://ts1.tc.mm.bing.net/th/id/R-C.b660ad19a9f6d7e8a8f200ca097a82b0?rik=uh31%2bbuSmKIiyg&riu=http%3a%2f%2fn.sinaimg.cn%2ffront20200622ac%2f586%2fw1919h1067%2f20200622%2f80b4-ivffpct4371450.jpg&ehk=PaGPOaAv28K8lzr8Qz7ASicEwyDDSGGd1WYgAKwi6EI%3d&risl=&pid=ImgRaw&r=0',
            composer: '林-曼努尔·米兰达',
            year: '2015',
            duration: '2小时45分钟',
            country: '美国',
            style: '嘻哈音乐剧'
        },
        {
            id: 4,
            title: '摇滚红与黑',
            subtitle: 'Le Rouge et le Noir - L\'Opéra Rock',
            description: '改编自司汤达的经典小说《红与黑》，讲述平民青年于连·索雷尔在复辟王朝时期的奋斗与爱情故事。这部法语摇滚音乐剧将古典文学与现代摇滚音乐完美结合，舞台设计前卫大胆，音乐充满力量，深受中国观众喜爱。',
            image: 'https://bkimg.cdn.bcebos.com/pic/77094b36acaf2edda3cc028f6d4a16e93901213f3518?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080',
            composer: '泽维尔·德克洛',
            year: '2016',
            duration: '2小时15分钟',
            country: '法国',
            style: '摇滚音乐剧'
        }
    ];
    
    // 清空现有内容
    musicalContainer.innerHTML = '';
    
    // 创建音乐剧卡片
    musicals.forEach(musical => {
        const musicalCard = document.createElement('div');
        musicalCard.className = 'musical-card';
        
        // 为摇滚红与黑添加特殊标记
        const isRock = musical.title.includes();
        
        musicalCard.innerHTML = `
            ${isRock ? '<div class="rock-badge">热门摇滚</div>' : ''}
            <img src="${musical.image}" alt="${musical.title}" class="musical-img">
            <div class="musical-content">
                <h3 class="musical-title">${musical.title}</h3>
                <p class="musical-subtitle">${musical.subtitle}</p>
                <p class="musical-desc">${musical.description}</p>
                <div class="musical-tags">
                    <span class="musical-tag style-tag">${musical.style}</span>
                    <span class="musical-tag country-tag">${musical.country}</span>
                </div>
                <div class="musical-details">
                    <div class="detail-item">
                        <i class="fas fa-user-tie detail-icon"></i>
                        <span>作曲：${musical.composer}</span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-calendar detail-icon"></i>
                        <span>首演：${musical.year}</span>
                    </div>
                    <div class="detail-item">
                        <i class="far fa-clock detail-icon"></i>
                        <span>时长：${musical.duration}</span>
                    </div>
                </div>
            </div>
        `;
        
        musicalContainer.appendChild(musicalCard);
    });
}

// 加载小说内容
function loadNovelsContent() {
    const novelContainer = document.getElementById('novel-container');
    
    if (!novelContainer) return;
    
    const novels = [
        {
            id: 1,
            title: '嫌疑人X的献身',
            genre: '悬疑/推理',
            author: '东野圭吾',
            year: '2005',
            excerpt: '数学天才石神每天唯一的乐趣，便是去固定的便当店买午餐，只为看一眼在便当店做事的邻居靖子。靖子与女儿相依为命，失手杀了前来纠缠的前夫。为救靖子，石神提出由他料理善后，设了一个匪夷所思的局，令警方只能在外围敲敲打打，根本无法与案子沾边。石神究竟使用了什么手法？',
            rating: 4.8,
            pages: 300,
            country: '日本'
        },
        {
            id: 2,
            title: '无人生还',
            genre: '悬疑/推理',
            author: '阿加莎·克里斯蒂',
            year: '1939',
            excerpt: '十个互不相识的人，被富有的欧文先生邀请到了印第安岛上的私人别墅里。晚餐后，一个神秘的声音揭开了人们心中各自隐藏着的可怕秘密。当天晚上，年轻的马斯顿先生离奇死去，古老的童谣就像诅咒一样笼罩着所有人，似乎有一双神秘的眼睛在时刻窥视着这场死亡游戏。',
            rating: 4.7,
            pages: 256,
            country: '英国'
        },
        {
            id: 3,
            title: '悲惨世界',
            genre: '经典/社会',
            author: '维克多·雨果',
            year: '1862',
            excerpt: '贫穷的冉·阿让为了挨饿的孩子去偷面包，结果被判处19年的苦役。出狱后，走投无路的他被主教收留，但他却偷走了主教的银器。主教却用善意的谎言帮他免于再次被捕。感于主教的宽厚与爱心，冉·阿让化名马德兰，从此洗心革面奋发向上，十年后成为成功的商人并当上市长。',
            rating: 4.9,
            pages: 1463,
            country: '法国'
        },
        {
            id: 4,
            title: '活着',
            genre: '文学/现实',
            author: '余华',
            year: '1993',
            excerpt: '地主少爷福贵嗜赌成性，终于赌光了家业一贫如洗，穷困之中因母亲生病前去求医，没想到半路上被国民党部队抓了壮丁，后被解放军所俘虏，回到家乡他才知道母亲已经去世，妻子家珍含辛茹苦带大了一双儿女，但女儿不幸变成了聋哑人，儿子机灵活泼……然而，真正的悲剧从此才开始渐次上演。',
            rating: 4.8,
            pages: 191,
            country: '中国'
        }
    ];
    
    // 清空现有内容
    novelContainer.innerHTML = '';
    
    // 创建小说卡片
    novels.forEach(novel => {
        const novelCard = document.createElement('div');
        novelCard.className = 'novel-card';
        
        novelCard.innerHTML = `
            <div class="novel-header">
                <h3 class="novel-title">${novel.title}</h3>
                <span class="novel-genre">${novel.genre}</span>
            </div>
            <div class="novel-content">
                <p class="novel-excerpt">${novel.excerpt}</p>
                <div class="novel-stats">
                    <div class="stat-item">
                        <i class="fas fa-user-edit stat-icon"></i>
                        <span>作者：${novel.author}</span>
                    </div>
                    <div class="stat-item">
                        <i class="far fa-calendar stat-icon"></i>
                        <span>出版：${novel.year}</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-star stat-icon"></i>
                        <span>评分：${novel.rating}/5.0</span>
                    </div>
                </div>
            </div>
        `;
        
        // 添加国家/地区标签
        const countryBadge = document.createElement('div');
        countryBadge.className = 'country-badge';
        countryBadge.textContent = novel.country;
        countryBadge.style.position = 'absolute';
        countryBadge.style.top = '15px';
        countryBadge.style.right = '15px';
        countryBadge.style.padding = '5px 12px';
        countryBadge.style.borderRadius = '15px';
        countryBadge.style.fontSize = '0.8rem';
        countryBadge.style.fontWeight = '600';
        countryBadge.style.backgroundColor = 'rgba(139, 69, 19, 0.15)';
        countryBadge.style.color = 'var(--primary-color)';
        countryBadge.style.border = '1px solid rgba(139, 69, 19, 0.3)';
        
        novelCard.style.position = 'relative';
        novelCard.appendChild(countryBadge);
        novelContainer.appendChild(novelCard);
    });
}

// 添加键盘导航支持
document.addEventListener('keydown', function(e) {
    // 按数字键1-3切换页面
    if (e.key >= '1' && e.key <= '3') {
        const sections = ['photography', 'musicals', 'novels'];
        const sectionIndex = parseInt(e.key) - 1;
        
        if (sectionIndex < sections.length) {
            const targetSection = sections[sectionIndex];
            
            // 更新导航
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(l => l.classList.remove('active'));
            
            const targetLink = document.querySelector(`.nav-link[data-section="${targetSection}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            
            // 切换内容
            switchContent(targetSection);
        }
    }
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});