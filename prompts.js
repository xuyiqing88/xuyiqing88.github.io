const styles = [
    {
        name: "SAI官方-基础风格",
        prompt: "无",
        translation: "无",
        negative_prompt: "无",
        category: "SAI官方"
    },
    {
        name: "SAI官方-3d模型",
        prompt: "professional 3d model {prompt} . octane render, highly detailed, volumetric, dramatic lighting",
        translation: "专业3d模型{提示}。OC渲染，高度详细，体积，戏剧性的照明",
        negative_prompt: "ugly, deformed, noisy, low poly, blurry, painting",
        category: "SAI官方"
    },
    {
        name: "SAI官方-模拟电影",
        prompt: "analog film photo {prompt} . faded film, desaturated, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage",
        translation: "模拟胶片照片{提示}。褪色胶片，去饱和，35mm照片，颗粒，小插图，复古，柯达彩色，Lomography，染色，高度详细，真实镜头",
        negative_prompt: "painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured",
        category: "SAI官方"
    },
    {
        name: "SAI官方-动画",
        prompt: "anime artwork {prompt} . anime style, key visual, vibrant, studio anime, highly detailed",
        translation: "动漫作品{提示}。动画风格，重点视觉，充满活力，工作室动画，非常详细",
        negative_prompt: "photo, deformed, black and white, realism, disfigured, low contrast",
        category: "SAI官方"
    },
    {
        name: "SAI官方-电影",
        prompt: "cinematic film still {prompt} . shallow depth of field, vignette, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy",
        translation: "电影剧照{提示}。浅景深，小插图，高度详细，高预算，散景，电影，喜怒哀乐，史诗，华丽，电影颗粒，颗粒",
        negative_prompt: "anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured",
        category: "SAI官方"
    },
    {
        name: "SAI官方-漫画",
        prompt: "comic {prompt} . graphic illustration, comic art, graphic novel art, vibrant, highly detailed",
        translation: "漫画{提示}。图形插画，漫画艺术，图形小说艺术，充满活力，高度详细",
        negative_prompt: "photograph, deformed, glitch, noisy, realistic, stock photo",
        category: "SAI官方"
    },
    {
        name: "SAI官方-黏土",
        prompt: "play-doh style {prompt} . sculpture, clay art, centered composition, Claymation",
        translation: "橡皮泥风格的{提示符}。雕塑、泥塑艺术、中心构图、泥塑",
        negative_prompt: "sloppy, messy, grainy, highly detailed, ultra textured, photo",
        category: "SAI官方"
    },
    {
        name: "SAI官方-数码",
        prompt: "concept art {prompt} . digital artwork, illustrative, painterly, matte painting, highly detailed",
        translation: "概念艺术{提示}。数字艺术作品，插图，绘画，哑光绘画，高度详细",
        negative_prompt: "photo, photorealistic, realism, ugly",
        category: "SAI官方"
    },
    {
        name: "SAI官方-增强",
        prompt: "breathtaking {prompt} . award-winning, professional, highly detailed",
        translation: "惊人的{提示}。屡获殊荣，专业，非常详细",
        negative_prompt: "ugly, deformed, noisy, blurry, distorted, grainy",
        category: "SAI官方"
    },
    {
        name: "SAI官方-幻想",
        prompt: "ethereal fantasy concept art of {prompt} . magnificent, celestial, ethereal, painterly, epic, majestic, magical, fantasy art, cover art, dreamy",
        translation: "{提示}的空灵幻想概念艺术。宏伟的，天上的，空灵的，绘画般的，史诗般的，雄伟的，神奇的，幻想艺术，封面艺术，梦幻",
        negative_prompt: "photographic, realistic, realism, 35mm film, dslr, cropped, frame, text, deformed, glitch, noise, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, sloppy, duplicate, mutated, black and white",
        category: "SAI官方"
    },
    {
        name: "SAI官方-等距",
        prompt: "isometric style {prompt} . vibrant, beautiful, crisp, detailed, ultra detailed, intricate",
        translation: "等距样式{提示}。充满活力，美丽，清晰，细致，超细致，复杂",
        negative_prompt: "deformed, mutated, ugly, disfigured, blur, blurry, noise, noisy, realistic, photographic",
        category: "SAI官方"
    },
    {
        name: "SAI官方-线艺",
        prompt: "line art drawing {prompt} . professional, sleek, modern, minimalist, graphic, line art, vector graphics",
        translation: "线条艺术绘画{提示}。专业，时尚，现代，极简主义，图形，线条艺术，矢量图形",
        negative_prompt: "anime, photorealistic, 35mm film, deformed, glitch, blurry, noisy, off-center, deformed, cross-eyed, closed eyes, bad anatomy, ugly, disfigured, mutated, realism, realistic, impressionism, expressionism, oil, acrylic",
        category: "SAI官方"
    },
    {
        name: "SAI官方-低模",
        prompt: "low-poly style {prompt} . low-poly game art, polygon mesh, jagged, blocky, wireframe edges, centered composition",
        translation: "低多边形样式{提示}。低多边形游戏美术，多边形网格，锯齿状，块状，线框边缘，居中构图",
        negative_prompt: "noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo",
        category: "SAI官方"
    },
    {
        name: "SAI官方-霓虹",
        prompt: "neonpunk style {prompt} . cyberpunk, vaporwave, neon, vibes, vibrant, stunningly beautiful, crisp, detailed, sleek, ultramodern, magenta highlights, dark purple shadows, high contrast, cinematic, ultra detailed, intricate, professional",
        translation: "新朋克风格{提示}。赛博朋克，汽波，霓虹灯，振动，充满活力，惊人的美丽，脆，详细，光滑，超现代，品红高光，暗紫色阴影，高对比度，电影，超详细，复杂，专业",
        negative_prompt: "painting, drawing, illustration, glitch, deformed, mutated, cross-eyed, ugly, disfigured",
        category: "SAI官方"
    },
    {
        name: "SAI官方-纸艺",
        prompt: "origami style {prompt} . paper art, pleated paper, folded, origami art, pleats, cut and fold, centered composition",
        translation: "折纸风格{提示}。纸艺术，褶皱纸，折叠，折纸艺术，褶皱，裁折，居中构图",
        negative_prompt: "noisy, sloppy, messy, grainy, highly detailed, ultra textured, photo",
        category: "SAI官方"
    },
    {
        name: "SAI官方-照片",
        prompt: "cinematic photo {prompt} . 35mm photograph, film, bokeh, professional, 4k, highly detailed",
        translation: "电影照片{prompt}。35mm照片，胶片，散景，专业，4k，非常详细",
        negative_prompt: "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly",
        category: "SAI官方"
    },
    {
        name: "SAI官方-像素艺术",
        prompt: "pixel-art {prompt} . low-res, blocky, pixel art style, 8-bit graphics",
        translation: "像素艺术{提示}。低分辨率，块状，像素艺术风格，8位图形",
        negative_prompt: "sloppy, messy, blurry, noisy, highly detailed, ultra textured, photo, realistic",
        category: "SAI官方"
    },
    {
        name: "SAI官方-材质纹理",
        prompt: "texture {prompt} top down close-up",
        translation: "纹理{提示}自上而下的特写",
        negative_prompt: "ugly, deformed, noisy, blurry",
        category: "SAI官方"
    },
    {
        name: "广告-宣传",
        prompt: "advertising poster style {prompt} . Professional, modern, product-focused, commercial, eye-catching, highly detailed",
        translation: "广告海报风格{提示}。专业、现代、以产品为中心、商业、醒目、细致",
        negative_prompt: "noisy, blurry, amateurish, sloppy, unattractive",
        category: "广告"
    },
    {
        name: "广告-汽车",
        prompt: "automotive advertisement style {prompt} . sleek, dynamic, professional, commercial, vehicle-focused, high-resolution, highly detailed",
        translation: "汽车广告风格{提示}。时尚、动感、专业、商业、以车辆为中心、高分辨率、高细节",
        negative_prompt: "noisy, blurry, unattractive, sloppy, unprofessional",
        category: "广告"
    },
    {
        name: "广告-企业",
        prompt: "corporate branding style {prompt} . professional, clean, modern, sleek, minimalist, business-oriented, highly detailed",
        translation: "企业品牌风格{prompt}。专业，干净，现代，时尚，简约，商务导向，高度细致",
        negative_prompt: "noisy, blurry, grungy, sloppy, cluttered, disorganized",
        category: "广告"
    },
    {
        name: "广告-流行",
        prompt: "fashion editorial style {prompt} . high fashion, trendy, stylish, editorial, magazine style, professional, highly detailed",
        translation: "时尚编辑风格{prompt}。高级时尚，新潮，时尚，编辑，杂志风格，专业，高度细致",
        negative_prompt: "outdated, blurry, noisy, unattractive, sloppy",
        category: "广告"
    },
    {
        name: "广告-食物",
        prompt: "food photography style {prompt} . appetizing, professional, culinary, high-resolution, commercial, highly detailed",
        translation: "美食摄影风格{提示}。开胃，专业，烹饪，高分辨率，商业，高度详细",
        negative_prompt: "unappetizing, sloppy, unprofessional, noisy, blurry",
        category: "广告"
    },
    {
        name: "广告-美食",
        prompt: "gourmet food photo of {prompt} . soft natural lighting, macro details, vibrant colors, fresh ingredients, glistening textures, bokeh background, styled plating, wooden tabletop, garnished, tantalizing, editorial quality",
        translation: "{prompt}美食照片。柔和的自然光，宏观细节，鲜艳的色彩，新鲜的食材，闪闪发光的纹理，散景背景，风格电镀，木制桌面，装饰，诱人，编辑质量",
        negative_prompt: "cartoon, anime, sketch, grayscale, dull, overexposed, cluttered, messy plate, deformed",
        category: "广告"
    },
    {
        name: "广告-奢侈",
        prompt: "luxury product style {prompt} . elegant, sophisticated, high-end, luxurious, professional, highly detailed",
        translation: "奢侈品款式{提示}。优雅、精致、高端、奢华、专业、细致",
        negative_prompt: "cheap, noisy, blurry, unattractive, amateurish",
        category: "广告"
    },
    {
        name: "广告-房产",
        prompt: "real estate photography style {prompt} . professional, inviting, well-lit, high-resolution, property-focused, commercial, highly detailed",
        translation: "房地产摄影风格{提示}。专业，诱人，光线充足，高分辨率，专注于物业，商业，非常详细",
        negative_prompt: "dark, blurry, unappealing, noisy, unprofessional",
        category: "广告"
    },
    {
        name: "广告-零售",
        prompt: "retail packaging style {prompt} . vibrant, enticing, commercial, product-focused, eye-catching, professional, highly detailed",
        translation: "零售包装样式{提示}。充满活力，诱人，商业，以产品为中心，引人注目，专业，非常详细",
        negative_prompt: "noisy, blurry, amateurish, sloppy, unattractive",
        category: "广告"
    },
    {
        name: "艺术-抽象",
        prompt: "abstract style {prompt} . non-representational, colors and shapes, expression of feelings, imaginative, highly detailed",
        translation: "抽象样式{prompt}。非具象，色彩和形状，感情的表达，富有想象力，高度细致",
        negative_prompt: "realistic, photographic, figurative, concrete",
        category: "艺术"
    },
    {
        name: "艺术-抽象表现",
        prompt: "abstract expressionist painting {prompt} . energetic brushwork, bold colors, abstract forms, expressive, emotional",
        translation: "抽象表现主义绘画{提示}。充满活力的笔触，大胆的色彩，抽象的形式，表现力，情感",
        negative_prompt: "realistic, photorealistic, low contrast, plain, simple, monochrome",
        category: "艺术"
    },
    {
        name: "艺术-装饰",
        prompt: "art deco style {prompt} . geometric shapes, bold colors, luxurious, elegant, decorative, symmetrical, ornate, detailed",
        translation: "装饰艺术风格{提示}。几何造型，色彩大胆，奢华、典雅、装饰性、对称、华丽、细致",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, modernist, minimalist",
        category: "艺术"
    },
    {
        name: "艺术-现代",
        prompt: "art nouveau style {prompt} . elegant, decorative, curvilinear forms, nature-inspired, ornate, detailed",
        translation: "新艺术风格{提示}。优雅，装饰，曲线形式，自然灵感，华丽，细节",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, modernist, minimalist",
        category: "艺术"
    },
    {
        name: "艺术-构成",
        prompt: "constructivist style {prompt} . geometric shapes, bold colors, dynamic composition, propaganda art style",
        translation: "建构主义风格{提示}。几何造型，大胆的色彩，动感的构图，宣传的艺术风格",
        negative_prompt: "realistic, photorealistic, low contrast, plain, simple, abstract expressionism",
        category: "艺术"
    },
    {
        name: "艺术-立体",
        prompt: "cubist artwork {prompt} . geometric shapes, abstract, innovative, revolutionary",
        translation: "立体派艺术品{提示}。几何形状，抽象，创新，革命性",
        negative_prompt: "anime, photorealistic, 35mm film, deformed, glitch, low contrast, noisy",
        category: "艺术"
    },
    {
        name: "艺术-表现",
        prompt: "expressionist {prompt} . raw, emotional, dynamic, distortion for emotional effect, vibrant, use of unusual colors, detailed",
        translation: "表现主义{提示}。原始的，情绪化的，动态的，扭曲的情感效果，充满活力，使用不寻常的颜色，详细",
        negative_prompt: "realism, symmetry, quiet, calm, photo",
        category: "艺术"
    },
    {
        name: "艺术-涂鸦",
        prompt: "graffiti style {prompt} . street art, vibrant, urban, detailed, tag, mural",
        translation: "涂鸦风格{prompt}。街头艺术，充满活力，城市，详细，标签，壁画",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic",
        category: "艺术"
    },
    {
        name: "艺术-高度现实",
        prompt: "hyperrealistic art {prompt} . extremely high-resolution details, photographic, realism pushed to extreme, fine texture, incredibly lifelike",
        translation: "超现实主义艺术{提示}。非常高分辨率的细节，摄影，现实主义推向极致，精细的纹理，令人难以置信的逼真",
        negative_prompt: "simplified, abstract, unrealistic, impressionistic, low resolution",
        category: "艺术"
    },
    {
        name: "艺术-印象",
        prompt: "impressionist painting {prompt} . loose brushwork, vibrant color, light and shadow play, captures feeling over form",
        translation: "印象派绘画{提示}。松散的笔法，充满活力的色彩，光影的发挥，捕捉感觉超过形式",
        negative_prompt: "anime, photorealistic, 35mm film, deformed, glitch, low contrast, noisy",
        category: "艺术"
    },
    {
        name: "艺术-点画派",
        prompt: "pointillism style {prompt} . composed entirely of small, distinct dots of color, vibrant, highly detailed",
        translation: "点彩风格{提示}。彩色的：完全由小而清晰的彩色点组成的，充满活力的，非常详细的",
        negative_prompt: "line drawing, smooth shading, large color fields, simplistic",
        category: "艺术"
    },
    {
        name: "艺术-波普",
        prompt: "pop Art style {prompt} . bright colors, bold outlines, popular culture themes, ironic or kitsch",
        translation: "波普艺术风格{提示}。明亮的色彩，大胆的轮廓，流行文化主题，讽刺或媚俗",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, minimalist",
        category: "艺术"
    },
    {
        name: "艺术-迷幻",
        prompt: "psychedelic style {prompt} . vibrant colors, swirling patterns, abstract forms, surreal, trippy",
        translation: "迷幻风格{提示}。鲜艳的色彩，旋转的图案，抽象的形式，超现实的，迷幻的",
        negative_prompt: "monochrome, black and white, low contrast, realistic, photorealistic, plain, simple",
        category: "艺术"
    },
    {
        name: "艺术-文艺复兴",
        prompt: "renaissance style {prompt} . realistic, perspective, light and shadow, religious or mythological themes, highly detailed",
        translation: "文艺复兴风格{提示}。现实主义，透视，光影，宗教或神话主题，非常详细",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, modernist, minimalist, abstract",
        category: "艺术"
    },
    {
        name: "艺术-蒸汽朋克",
        prompt: "steampunk style {prompt} . antique, mechanical, brass and copper tones, gears, intricate, detailed",
        translation: "蒸汽朋克风格{提示}。仿古，机械，黄铜和铜色调，齿轮，错综复杂，详细",
        negative_prompt: "deformed, glitch, noisy, low contrast, anime, photorealistic",
        category: "艺术"
    },
    {
        name: "艺术-超现实",
        prompt: "surrealist art {prompt} . dreamlike, mysterious, provocative, symbolic, intricate, detailed",
        translation: "超现实主义艺术{提示}。梦幻般的，神秘的，挑衅的，象征的，复杂的，细致的",
        negative_prompt: "anime, photorealistic, realistic, deformed, glitch, noisy, low contrast",
        category: "艺术"
    },
    {
        name: "艺术-排版",
        prompt: "typographic art {prompt} . stylized, intricate, detailed, artistic, text-based",
        translation: "排版艺术{提示}。风格化的、复杂的、细节化的、艺术化的、文本化的",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic",
        category: "艺术"
    },
    {
        name: "艺术-水彩",
        prompt: "watercolor painting {prompt} . vibrant, beautiful, painterly, detailed, textural, artistic",
        translation: "水彩画{提示}。充满活力的、美丽的、绘画般的、细致的、有质感的、艺术的",
        negative_prompt: "anime, photorealistic, 35mm film, deformed, glitch, low contrast, noisy",
        category: "艺术"
    },
    {
        name: "未来-生物力学",
        prompt: "biomechanical style {prompt} . blend of organic and mechanical elements, futuristic, cybernetic, detailed, intricate",
        translation: "生物力学风格{提示}。有机和机械元素的融合，未来主义的，控制论的，细致的，复杂的",
        negative_prompt: "natural, rustic, primitive, organic, simplistic",
        category: "未来"
    },
    {
        name: "未来-赛博生物力学",
        prompt: "biomechanical cyberpunk {prompt} . cybernetics, human-machine fusion, dystopian, organic meets artificial, dark, intricate, highly detailed",
        translation: "生物力学赛博朋克{提示}控制论，人机融合，反乌托邦，有机遇见人工，黑暗，复杂，高度细致",
        negative_prompt: "natural, colorful, deformed, sketch, low contrast, watercolor",
        category: "未来"
    },
    {
        name: "未来-控制论",
        prompt: "cybernetic style {prompt} . futuristic, technological, cybernetic enhancements, robotics, artificial intelligence themes",
        translation: "控制论风格{提示}。未来主义、科技、控制论增强、机器人、人工智能主题",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, historical, medieval",
        category: "未来"
    },
    {
        name: "未来-机器人",
        prompt: "cybernetic robot {prompt} . android, AI, machine, metal, wires, tech, futuristic, highly detailed",
        translation: "控制论机器人{提示}。机器人，人工智能，机器，金属，电线，科技，未来主义，非常详细",
        negative_prompt: "organic, natural, human, sketch, watercolor, low contrast",
        category: "未来"
    },
    {
        name: "未来-赛博城市",
        prompt: "cyberpunk cityscape {prompt} . neon lights, dark alleys, skyscrapers, futuristic, vibrant colors, high contrast, highly detailed",
        translation: "赛博朋克城市景观{提示}。霓虹灯，黑暗的小巷，摩天大楼，未来主义，鲜艳的色彩，高对比度，高度细节化",
        negative_prompt: "natural, rural, deformed, low contrast, black and white, sketch, watercolor",
        category: "未来"
    },
    {
        name: "未来-未来",
        prompt: "futuristic style {prompt} . sleek, modern, ultramodern, high tech, detailed",
        translation: "未来风格{prompt}。时尚、现代、超现代、高科技、细节",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, vintage, antique",
        category: "未来"
    },
    {
        name: "未来-复古赛博",
        prompt: "retro cyberpunk {prompt} . 80’s inspired, synthwave, neon, vibrant, detailed, retro futurism",
        translation: "复古赛博朋克{提示}。80年代的灵感，合成波，霓虹灯，充满活力，细节，复古的未来主义",
        negative_prompt: "modern, desaturated, black and white, realism, low contrast",
        category: "未来"
    },
    {
        name: "未来-复古未来",
        prompt: "retro-futuristic {prompt} . vintage sci-fi, 50s and 60s style, atomic age, vibrant, highly detailed",
        translation: "复古未来的{提示}。复古科幻，五六十年代风格，原子时代，充满活力，非常详细",
        negative_prompt: "contemporary, realistic, rustic, primitive",
        category: "未来"
    },
    {
        name: "未来-科幻",
        prompt: "sci-fi style {prompt} . futuristic, technological, alien worlds, space themes, advanced civilizations",
        translation: "科幻风格的{提示}。未来主义，科技，外星世界，太空主题，先进文明",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, historical, medieval",
        category: "未来"
    },
    {
        name: "未来-蒸汽波",
        prompt: "vaporwave style {prompt} . retro aesthetic, cyberpunk, vibrant, neon colors, vintage 80s and 90s style, highly detailed",
        translation: "蒸汽波样式{提示}。复古美学，赛博朋克，充满活力，霓虹灯的颜色，复古的80年代和90年代的风格，高度细致",
        negative_prompt: "monochrome, muted colors, realism, rustic, minimalist, dark",
        category: "未来"
    },
    {
        name: "游戏-泡泡龙",
        prompt: "Bubble Bobble style {prompt} . 8-bit, cute, pixelated, fantasy, vibrant, reminiscent of Bubble Bobble game",
        translation: "泡泡龙风格{prompt}。8比特，可爱，像素化，幻想，充满活力，让人想起泡泡球游戏",
        negative_prompt: "realistic, modern, photorealistic, violent, horror",
        category: "游戏"
    },
    {
        name: "游戏-赛博朋克",
        prompt: "cyberpunk game style {prompt} . neon, dystopian, futuristic, digital, vibrant, detailed, high contrast, reminiscent of cyberpunk genre video games",
        translation: "赛博朋克游戏风格{提示}。霓虹灯，反乌托邦，未来主义，数字，充满活力，细节，高对比度，让人想起赛博朋克类型的电子游戏",
        negative_prompt: "historical, natural, rustic, low detailed",
        category: "游戏"
    },
    {
        name: "游戏-格斗游戏",
        prompt: "fighting game style {prompt} . dynamic, vibrant, action-packed, detailed character design, reminiscent of fighting video games",
        translation: "格斗游戏风格{提示}。动态，充满活力，动作包装，详细的角色设计，让人联想到战斗电子游戏",
        negative_prompt: "peaceful, calm, minimalist, photorealistic",
        category: "游戏"
    },
    {
        name: "游戏-GTA",
        prompt: "GTA-style artwork {prompt} . satirical, exaggerated, pop art style, vibrant colors, iconic characters, action-packed",
        translation: "gta风格的艺术品{提示}。讽刺，夸张，流行艺术风格，鲜艳的色彩，标志性人物，动感十足",
        negative_prompt: "realistic, black and white, low contrast, impressionist, cubist, noisy, blurry, deformed",
        category: "游戏"
    },
    {
        name: "游戏-马里奥",
        prompt: "Super Mario style {prompt} . vibrant, cute, cartoony, fantasy, playful, reminiscent of Super Mario series",
        translation: "超级马里奥风格的{提示}。充满活力，可爱，卡通，幻想，俏皮，让人想起超级马里奥系列",
        negative_prompt: "realistic, modern, horror, dystopian, violent",
        category: "游戏"
    },
    {
        name: "游戏-我的世界",
        prompt: "Minecraft style {prompt} . blocky, pixelated, vibrant colors, recognizable characters and objects, game assets",
        translation: "我的世界风格{prompt}。块状、像素化、鲜艳的色彩、可识别的角色和物体、游戏资产",
        negative_prompt: "smooth, realistic, detailed, photorealistic, noise, blurry, deformed",
        category: "游戏"
    },
    {
        name: "游戏-宝可梦",
        prompt: "Pokémon style {prompt} . vibrant, cute, anime, fantasy, reminiscent of Pokémon series",
        translation: "口袋妖怪风格{提示}。充满活力，可爱，动画，幻想，让人想起poksammon系列",
        negative_prompt: "realistic, modern, horror, dystopian, violent",
        category: "游戏"
    },
    {
        name: "游戏-复古街机",
        prompt: "retro arcade style {prompt} . 8-bit, pixelated, vibrant, classic video game, old school gaming, reminiscent of 80s and 90s arcade games",
        translation: "复古街机风格{提示}。8位，像素化，充满活力，经典的视频游戏，老派游戏，让人想起80年代和90年代的街机游戏",
        negative_prompt: "modern, ultra-high resolution, photorealistic, 3D",
        category: "游戏"
    },
    {
        name: "游戏-复古游戏",
        prompt: "retro game art {prompt} . 16-bit, vibrant colors, pixelated, nostalgic, charming, fun",
        translation: "复古游戏美术{提示}。16位，鲜艳的色彩，像素化，怀旧，迷人，有趣",
        negative_prompt: "realistic, photorealistic, 35mm film, deformed, glitch, low contrast, noisy",
        category: "游戏"
    },
    {
        name: "游戏-RPG幻想",
        prompt: "role-playing game (RPG) style fantasy {prompt} . detailed, vibrant, immersive, reminiscent of high fantasy RPG games",
        translation: "角色扮演游戏（RPG）风格的奇幻{提示}。细节，充满活力，身临其境，让人想起高幻想RPG游戏",
        negative_prompt: "sci-fi, modern, urban, futuristic, low detailed",
        category: "游戏"
    },
    {
        name: "游戏-策略游戏",
        prompt: "strategy game style {prompt} . overhead view, detailed map, units, reminiscent of real-time strategy video games",
        translation: "策略游戏风格{提示}。俯视图，详细的地图，单位，让人想起即时战略视频游",
        negative_prompt: "first-person view, modern, photorealistic",
        category: "游戏"
    },
    {
        name: "游戏-街霸",
        prompt: "Street Fighter style {prompt} . vibrant, dynamic, arcade, 2D fighting game, highly detailed, reminiscent of Street Fighter series",
        translation: "街头霸王风格{提示}。充满活力，动态，街机，2D格斗游戏，非常详细，让人想起街头霸王系列",
        negative_prompt: "3D, realistic, modern, photorealistic, turn-based strategy",
        category: "游戏"
    },
    {
        name: "游戏-塞尔达",
        prompt: "Legend of Zelda style {prompt} . vibrant, fantasy, detailed, epic, heroic, reminiscent of The Legend of Zelda series",
        translation: "塞尔达传说风格{提示}。充满活力，幻想，细节，史诗，英雄，让人想起《塞尔达传说》系列",
        negative_prompt: "sci-fi, modern, realistic, horror",
        category: "游戏"
    },
    {
        name: "杂项-建筑",
        prompt: "architectural style {prompt} . clean lines, geometric shapes, minimalist, modern, architectural drawing, highly detailed",
        translation: "建筑风格{prompt}。干净的线条，几何形状，极简主义，现代，建筑图纸，非常详细",
        negative_prompt: "curved lines, ornate, baroque, abstract, grunge",
        category: "杂项"
    },
    {
        name: "杂项-迪斯科",
        prompt: "disco-themed {prompt} . vibrant, groovy, retro 70s style, shiny disco balls, neon lights, dance floor, highly detailed",
        translation: "迪斯科主题的{提示}。充满活力，时髦，复古的70年代风格，闪亮的迪斯科球，霓虹灯，舞池，非常详细",
        negative_prompt: "minimalist, rustic, monochrome, contemporary, simplistic",
        category: "杂项"
    },
    {
        name: "杂项-梦幻",
        prompt: "dreamscape {prompt} . surreal, ethereal, dreamy, mysterious, fantasy, highly detailed",
        translation: "梦境逃离{提示}。超现实的，飘渺的，梦幻的，神秘的，幻想的，高度细致的",
        negative_prompt: "realistic, concrete, ordinary, mundane",
        category: "杂项"
    },
    {
        name: "杂项-反乌托邦",
        prompt: "dystopian style {prompt} . bleak, post-apocalyptic, somber, dramatic, highly detailed",
        translation: "反乌托邦风格{提示}。阴冷、后世界末日、阴郁、戏剧性、高度细致",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, cheerful, optimistic, vibrant, colorful",
        category: "杂项"
    },
    {
        name: "杂项-童话",
        prompt: "fairy tale {prompt} . magical, fantastical, enchanting, storybook style, highly detailed",
        translation: "童话{提示}。神奇，奇幻，迷人，故事书风格，非常详细",
        negative_prompt: "realistic, modern, ordinary, mundane",
        category: "杂项"
    },
    {
        name: "杂项-哥特",
        prompt: "gothic style {prompt} . dark, mysterious, haunting, dramatic, ornate, detailed",
        translation: "哥特式风格{提示}。黑暗的，神秘的，令人难以忘怀的，戏剧性的，华丽的，细节的",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, cheerful, optimistic",
        category: "杂项"
    },
    {
        name: "杂项-颓废",
        prompt: "grunge style {prompt} . textured, distressed, vintage, edgy, punk rock vibe, dirty, noisy",
        translation: "颓废风格{提示}。纹理，苦恼，复古，前卫，朋克摇滚氛围，肮脏，嘈杂",
        negative_prompt: "smooth, clean, minimalist, sleek, modern, photorealistic",
        category: "杂项"
    },
    {
        name: "杂项-恐怖",
        prompt: "horror-themed {prompt} . eerie, unsettling, dark, spooky, suspenseful, grim, highly detailed",
        translation: "恐怖主题的{提示}。诡异、不安、黑暗、阴森、悬疑、冷酷、细节丰富",
        negative_prompt: "cheerful, bright, vibrant, light-hearted, cute",
        category: "杂项"
    },
    {
        name: "杂项-卡哇伊",
        prompt: "kawaii style {prompt} . cute, adorable, brightly colored, cheerful, anime influence, highly detailed",
        translation: "卡哇伊风格{提示}。可爱，可爱，色彩鲜艳，开朗，有动漫的影响，非常细致",
        negative_prompt: "dark, scary, realistic, monochrome, abstract",
        category: "杂项"
    },
    {
        name: "杂项-克苏鲁",
        prompt: "lovecraftian horror {prompt} . eldritch, cosmic horror, unknown, mysterious, surreal, highly detailed",
        translation: "洛夫克拉夫特恐怖{提示}。爱尔德里奇，宇宙恐怖，未知，神秘，超现实，非常详细",
        negative_prompt: "light-hearted, mundane, familiar, simplistic, realistic",
        category: "杂项"
    },
    {
        name: "杂项-死亡",
        prompt: "macabre style {prompt} . dark, gothic, grim, haunting, highly detailed",
        translation: "恐怖风格{提示}。黑暗、哥特式、阴森、令人难以忘怀、细节丰富",
        negative_prompt: "bright, cheerful, light-hearted, cartoonish, cute",
        category: "杂项"
    },
    {
        name: "杂项-漫画",
        prompt: "manga style {prompt} . vibrant, high-energy, detailed, iconic, Japanese comic style",
        translation: "漫画风格{提示}。充满活力，高能量，细节，标志性，日本漫画",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, Western comic style",
        category: "杂项"
    },
    {
        name: "杂项-大都会",
        prompt: "metropolis-themed {prompt} . urban, cityscape, skyscrapers, modern, futuristic, highly detailed",
        translation: "大都会主题{提示}。城市，城市景观，摩天大楼，现代，未来主义，非常详细",
        negative_prompt: "rural, natural, rustic, historical, simple",
        category: "杂项"
    },
    {
        name: "杂项-极简主义",
        prompt: "minimalist style {prompt} . simple, clean, uncluttered, modern, elegant",
        translation: "极简风格{prompt}。简单、干净、整洁、现代、优雅",
        negative_prompt: "ornate, complicated, highly detailed, cluttered, disordered, messy, noisy",
        category: "杂项"
    },
    {
        name: "杂项-单色",
        prompt: "monochrome {prompt} . black and white, contrast, tone, texture, detailed",
        translation: "单色{提示}。黑白，对比，色调，质感，细节",
        negative_prompt: "colorful, vibrant, noisy, blurry, deformed",
        category: "杂项"
    },
    {
        name: "杂项-航海",
        prompt: "nautical-themed {prompt} . sea, ocean, ships, maritime, beach, marine life, highly detailed",
        translation: "航海主题{提示}。海，海洋，船舶，海上，海滩，海洋生物，非常详细",
        negative_prompt: "landlocked, desert, mountains, urban, rustic",
        category: "杂项"
    },
    {
        name: "杂项-航空",
        prompt: "space-themed {prompt} . cosmic, celestial, stars, galaxies, nebulas, planets, science fiction, highly detailed",
        translation: "以太空为主题的{prompt}。宇宙，天体，恒星，星系，星云，行星，科幻小说，非常详细",
        negative_prompt: "earthly, mundane, ground-based, realism",
        category: "杂项"
    },
    {
        name: "杂项-彩色玻璃",
        prompt: "stained glass style {prompt} . vibrant, beautiful, translucent, intricate, detailed",
        translation: "彩色玻璃风格{提示}。充满活力，美丽，半透明，复杂，细致",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic",
        category: "杂项"
    },
    {
        name: "杂项-技能服饰",
        prompt: "techwear fashion {prompt} . futuristic, cyberpunk, urban, tactical, sleek, dark, highly detailed",
        translation: "科技服装时尚{提示}。未来主义，赛博朋克，城市，战术，圆滑，黑暗，高度细致",
        negative_prompt: "vintage, rural, colorful, low contrast, realism, sketch, watercolor",
        category: "杂项"
    },
    {
        name: "杂项-部落",
        prompt: "tribal style {prompt} . indigenous, ethnic, traditional patterns, bold, natural colors, highly detailed",
        translation: "部落风格{prompt}。本土，民族，传统的图案，大胆，自然的色彩，高度细致",
        negative_prompt: "modern, futuristic, minimalist, pastel",
        category: "杂项"
    },
    {
        name: "杂项-禅绕",
        prompt: "zentangle {prompt} . intricate, abstract, monochrome, patterns, meditative, highly detailed",
        translation: "纠缠{提示}。复杂的，抽象的，单色的，图案的，沉思的，非常详细的",
        negative_prompt: "colorful, representative, simplistic, large fields of color",
        category: "杂项"
    },
    {
        name: "纸艺-拼贴",
        prompt: "collage style {prompt} . mixed media, layered, textural, detailed, artistic",
        translation: "拼贴风格{提示}。混合媒体，分层，纹理，细节，艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic",
        category: "纸艺"
    },
    {
        name: "纸艺-平面",
        prompt: "flat papercut style {prompt} . silhouette, clean cuts, paper, sharp edges, minimalist, color block",
        translation: "平剪纸风格{提示}。轮廓，干净的剪裁，纸，锋利的边缘，极简主义，色块",
        negative_prompt: "3D, high detail, noise, grainy, blurry, painting, drawing, photo, disfigured",
        category: "纸艺"
    },
    {
        name: "纸艺-剪纸",
        prompt: "kirigami representation of {prompt} . 3D, paper folding, paper cutting, Japanese, intricate, symmetrical, precision, clean lines",
        translation: "{prompt}的剪纸艺术表达。3D，折纸，剪纸，日式，繁复，对称，精密，线条干净",
        negative_prompt: "painting, drawing, 2D, noisy, blurry, deformed",
        category: "纸艺"
    },
    {
        name: "纸艺-混凝纸",
        prompt: "paper mache representation of {prompt} . 3D, sculptural, textured, handmade, vibrant, fun",
        translation: "{prompt}的纸制表示。3D，雕塑，纹理，手工，充满活力，有趣",
        negative_prompt: "2D, flat, photo, sketch, digital art, deformed, noisy, blurry",
        category: "纸艺"
    },
    {
        name: "纸艺-衍纸",
        prompt: "paper quilling art of {prompt} . intricate, delicate, curling, rolling, shaping, coiling, loops, 3D, dimensional, ornamental",
        translation: "{prompt}的纸笔艺术。复杂的，精致的，卷曲的，滚动的，成型的，卷曲的，循环的，三维的，立体的，装饰性的",
        negative_prompt: "photo, painting, drawing, 2D, flat, deformed, noisy, blurry",
        category: "纸艺"
    },
    {
        name: "纸艺-剪纸拼贴",
        prompt: "papercut collage of {prompt} . mixed media, textured paper, overlapping, asymmetrical, abstract, vibrant",
        translation: "剪纸拼贴{提示}。混合媒介，纹理纸，重叠，不对称，抽象，充满活力",
        negative_prompt: "photo, 3D, realistic, drawing, painting, high detail, disfigured",
        category: "纸艺"
    },
    {
        name: "纸艺-剪影盒子",
        prompt: "3D papercut shadow box of {prompt} . layered, dimensional, depth, silhouette, shadow, papercut, handmade, high contrast",
        translation: "{prompt}三维剪纸影盒。分层，维度，深度，轮廓，阴影，剪纸，手工制作，高对比度",
        negative_prompt: "painting, drawing, photo, 2D, flat, high detail, blurry, noisy, disfigured",
        category: "纸艺"
    },
    {
        name: "纸艺-堆叠剪纸",
        prompt: "stacked papercut art of {prompt} . 3D, layered, dimensional, depth, precision cut, stacked layers, papercut, high contrast",
        translation: "叠叠剪纸艺术{提示}。3D、分层、立体、深度、精准切割、层叠、剪纸、高对比度",
        negative_prompt: "2D, flat, noisy, blurry, painting, drawing, photo, deformed",
        category: "纸艺"
    },
    {
        name: "纸艺-厚层剪纸",
        prompt: "thick layered papercut art of {prompt} . deep 3D, volumetric, dimensional, depth, thick paper, high stack, heavy texture, tangible layers",
        translation: "{提示}厚层剪纸艺术。深三维，体积，维度，深度，厚纸，高堆叠，重纹理，有形的层次",
        negative_prompt: "2D, flat, thin paper, low stack, smooth texture, painting, drawing, photo, deformed",
        category: "纸艺"
    },
    {
        name: "照片-外星人",
        prompt: "alien-themed {prompt} . extraterrestrial, cosmic, otherworldly, mysterious, sci-fi, highly detailed",
        translation: "外星人主题的{提示}。外星的，宇宙的，超凡脱俗的，神秘的，科幻的，非常详细的",
        negative_prompt: "earthly, mundane, common, realistic, simple",
        category: "照片"
    },
    {
        name: "照片-黑白照片",
        prompt: "film noir style {prompt} . monochrome, high contrast, dramatic shadows, 1940s style, mysterious, cinematic",
        translation: "黑色电影风格{提示}。单色，高对比度，戏剧性的阴影，40年代风格，神秘，电影",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic, vibrant, colorful",
        category: "照片"
    },
    {
        name: "照片-魅力",
        prompt: "glamorous photo {prompt} . high fashion, luxurious, extravagant, stylish, sensual, opulent, elegance, stunning beauty, professional, high contrast, detailed",
        translation: "迷人的照片{提示}。高级时尚、豪华、奢华、时尚、感性、华丽、优雅、绝美、专业、高对比度、细致",
        negative_prompt: "ugly, deformed, noisy, blurry, distorted, grainy, sketch, low contrast, dull, plain, modest",
        category: "照片"
    },
    {
        name: "照片-HDR",
        prompt: "HDR photo of {prompt} . High dynamic range, vivid, rich details, clear shadows and highlights, realistic, intense, enhanced contrast, highly detailed",
        translation: "{prompt}的HDR照片。高动态范围，生动，细节丰富，阴影和高光清晰，逼真，强烈，对比度增强，细节度高",
        negative_prompt: "flat, low contrast, oversaturated, underexposed, overexposed, blurred, noisy",
        category: "照片"
    },
    {
        name: "照片-iphone摄影",
        prompt: "iphone photo {prompt} . large depth of field, deep depth of field, highly detailed",
        translation: "IPhone 摄影 {prompt}。大景深，深景深，高细节",
        negative_prompt: "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly, shallow depth of field, bokeh",
        category: "照片"
    },
    {
        name: "照片-长曝光",
        prompt: "long exposure photo of {prompt} . Blurred motion, streaks of light, surreal, dreamy, ghosting effect, highly detailed",
        translation: "{prompt}的长曝光照片。模糊的运动，光线的条纹，超现实，梦幻，鬼影效果，高度细致",
        negative_prompt: "static, noisy, deformed, shaky, abrupt, flat, low contrast",
        category: "照片"
    },
    {
        name: "照片-黑色霓虹",
        prompt: "neon noir {prompt} . cyberpunk, dark, rainy streets, neon signs, high contrast, low light, vibrant, highly detailed",
        translation: "黑色霓虹灯{提示}。赛博朋克，黑暗，下雨的街道，霓虹灯，高对比度，低光，充满活力，非常详细",
        negative_prompt: "bright, sunny, daytime, low contrast, black and white, sketch, watercolor",
        category: "照片"
    },
    {
        name: "照片-剪影",
        prompt: "silhouette style {prompt} . high contrast, minimalistic, black and white, stark, dramatic",
        translation: "廓形样式{提示}。高对比度，简约，黑白，鲜明，戏剧性",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, color, realism, photorealistic",
        category: "照片"
    },
    {
        name: "照片-移轴摄影",
        prompt: "tilt-shift photo of {prompt} . selective focus, miniature effect, blurred background, highly detailed, vibrant, perspective control",
        translation: "{提示}的倾斜移动照片。选择性对焦，微缩效果，模糊背景，高度细致，充满活力，透视控制",
        negative_prompt: "blurry, noisy, deformed, flat, low contrast, unrealistic, oversaturated, underexposed",
        category: "照片"
    },
    {
        name: "照片-鱼眼镜头",
        prompt: "Fisheye lens photo of {prompt} . film, professional, 4k, highly detailed",
        translation: "{提示}鱼眼镜头照片。电影，专业，4k，非常详细",
        negative_prompt: "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly",
        category: "照片"
    },
    {
        name: "照片-全景",
        prompt: "360 degree hdr photo, {prompt}. 360° panoramic photograph, film, professional, 4k, highly detailed",
        translation: "360度HDR照片，{提示}。360°全景照片，电影，专业，4k，非常详细",
        negative_prompt: "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly",
        category: "照片"
    },
    {
        name: "照片-超广角",
        prompt: "Ultra-wide Angle photo of {prompt} . film, professional, 4k, highly detailed",
        translation: "{prompt}的超广角照片。电影，专业，4k，非常详细",
        negative_prompt: "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly",
        category: "照片"
    },
    {
        name: "照片-影棚摄影",
        prompt: "Studio photography, {prompt}. professional lighting, HD detail, simple background",
        translation: "工作室摄影，{提示}。专业的照明，高清细节，简单的背景",
        negative_prompt: "drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly",
        category: "照片"
    },
    {
        name: "照片-韩流摄影",
        prompt: "Kpop style colors, {prompt}. shot at night with studio lights, album artwork, streaming on twitch, cyberpunk shadow dramatic lighting by Bill Sienkiewicz",
        translation: "韩国流行音乐风格的颜色，{prompt}。夜间拍摄，使用工作室灯光，专辑封面，twitch上的流媒体，Bill Sienkiewicz的赛博朋克阴影戏剧性灯光",
        negative_prompt: "worst quality, low quality, illustration, 3d, 2d, painting, cartoons, sketch",
        category: "照片"
    },
    {
        name: "艺术2-装饰艺术",
        prompt: "Art Deco, {prompt}, sleek, geometric forms, art deco style",
        translation: "装饰艺术，{提示}，圆滑，几何形式，装饰艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-新艺术风格",
        prompt: "Art Nouveau, beautiful art, {prompt}, sleek, organic forms, long, sinuous, art nouveau style",
        translation: "新艺术，美丽的艺术，{提示}，圆滑，有机的形式，长，蜿蜒，新艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, industrial, mechanical",
        category: "艺术2"
    },
    {
        name: "艺术2-星光环",
        prompt: "Astral Aura, {prompt}, astral, colorful aura, vibrant energy",
        translation: "星界光环，{提示}，星界，彩色光环，充满活力的能量",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-前卫",
        prompt: "Avant-garde, {prompt}, unusual, experimental, avant-garde art",
        translation: "前卫，{快}，不寻常的，实验性的，前卫的艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-巴洛克",
        prompt: "Baroque, {prompt}, dramatic, exuberant, grandeur, baroque art",
        translation: "巴洛克，{提示}，戏剧性的，旺盛的，宏伟的，巴洛克艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-包豪斯风格海报",
        prompt: "Bauhaus-Style Poster, {prompt}, simple geometric shapes, clean lines, primary colors, Bauhaus-Style Poster",
        translation: "包豪斯风格海报，{提示}，简单的几何形状，干净的线条，原色，包豪斯风格海报",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-蓝图示意图绘画",
        prompt: "Blueprint Schematic Drawing, {prompt}, technical drawing, blueprint, schematic",
        translation: "蓝图原理图，{提示}，技术图纸，蓝图，原理图",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-漫画",
        prompt: "Caricature, {prompt}, exaggerated, comical, caricature",
        translation: "讽刺，{提示}，夸张的，滑稽的，讽刺的",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-塞尔阴影艺术",
        prompt: "Cel Shaded Art, {prompt}, 2D, flat color, toon shading, cel shaded style",
        translation: "Cel阴影艺术，{提示}，2D，平面颜色，香椿阴影，Cel阴影风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-角色设计表",
        prompt: "Character Design Sheet, {prompt}, character reference sheet, character turn around",
        translation: "角色设计表，{提示}，角色参考表，角色转身",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-古典主义艺术",
        prompt: "Classicism Art, {prompt}, inspired by Roman and Greek culture, clarity, harmonious, classicism art",
        translation: "古典主义艺术，{提示}，灵感来自罗马和希腊文化，清晰，和谐，古典主义艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-色域绘画",
        prompt: "Color Field Painting, {prompt}, abstract, simple, geometic, color field painting style",
        translation: "色场绘画，{提示}，抽象，简单，几何，色场绘画风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-彩色铅笔艺术",
        prompt: "Colored Pencil Art, {prompt}, colored pencil strokes, light color, visible paper texture, colored pencil art",
        translation: "彩色铅笔艺术，{提示}，彩色铅笔笔画，浅色，可见纸的纹理，彩色铅笔艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-概念艺术",
        prompt: "Conceptual Art, {prompt}, concept art",
        translation: "概念艺术，{提示}，概念艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-构成主义",
        prompt: "Constructivism Art, {prompt}, minimalistic, geometric forms, constructivism art",
        translation: "构成主义艺术，{提示}，极简，几何形式，构成主义艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-立体主义",
        prompt: "Cubism Art, {prompt}, flat geometric forms, cubism art",
        translation: "立体主义艺术，{提示}，平面几何形式，立体主义艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-达达主义",
        prompt: "Dadaism Art, {prompt}, satirical, nonsensical, dadaism art",
        translation: "达达主义艺术，{提示}，讽刺，荒谬，达达主义艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-黑暗幻想",
        prompt: "Dark Fantasy Art, {prompt}, dark, moody, dark fantasy style",
        translation: "黑暗幻想艺术，{提示}，黑暗，喜怒无常，黑暗幻想风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, bright, sunny",
        category: "艺术2"
    },
    {
        name: "艺术2-黑暗沉闷的氛围",
        prompt: "Dark Moody Atmosphere, {prompt}, dramatic, mysterious, dark moody atmosphere",
        translation: "阴沉阴沉的气氛，{提示}，戏剧性的，神秘的，阴沉阴沉的气氛",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, vibrant, colorful, bright",
        category: "艺术2"
    },
    {
        name: "艺术2-DMT艺术风格",
        prompt: "DMT Art Style, {prompt}, bright colors, surreal visuals, swirling patterns, DMT art style",
        translation: "DMT艺术风格，{提示}，明亮的颜色，超现实的视觉效果，漩涡图案，DMT艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-涂鸦艺术",
        prompt: "Doodle Art Style, {prompt}, drawing, freeform, swirling patterns, doodle art style",
        translation: "涂鸦艺术风格，{提示}，绘图，自由形式，旋转图案，涂鸦艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-双重曝光",
        prompt: "Double Exposure Style, {prompt}, double image ghost effect, image combination, double exposure style",
        translation: "双重曝光风格，{提示}，双重图像幽灵效果，图像组合，双重曝光风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-滴漏喷溅油漆艺术",
        prompt: "Dripping Paint Splatter Art, {prompt}, dramatic, paint drips, splatters, dripping paint",
        translation: "滴油漆喷溅艺术，{提示}，戏剧性，油漆滴，飞溅，滴油漆",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-表现主义",
        prompt: "Expressionism Art Style, {prompt}, movement, contrast, emotional, exaggerated forms, expressionism art style",
        translation: "表现主义艺术风格，{提示}，运动，对比，情感，夸张的形式，表现主义艺术风",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-褪色的宝丽来照片",
        prompt: "Faded Polaroid Photo, {prompt}, analog, old faded photo, old polaroid",
        translation: "褪色的宝丽来照片，{提示}，模拟，旧褪色的照片，旧宝丽来",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, vibrant, colorful",
        category: "艺术2"
    },
    {
        name: "艺术2-野兽派",
        prompt: "Fauvism Art, {prompt}, painterly, bold colors, textured brushwork, fauvism art",
        translation: "野兽派艺术，{提示}，绘画，大胆的色彩，有质感的笔触，野兽派艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-平面2D艺术",
        prompt: "Flat 2D Art, {prompt}, simple flat color, 2-dimensional, Flat 2D Art Style",
        translation: "平面2D美术，{提示}，简单平面色彩，2维，平面2D美术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, 3D, photo, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-堡垒之夜艺术风格",
        prompt: "Fortnite Art Style, {prompt}, 3D cartoon, colorful, Fortnite Art Style",
        translation: "《堡垒之夜》美术风格，{提示}，3D卡通，彩色，《堡垒之夜》美术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, photo, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-未来主义",
        prompt: "Futurism Art Style, {prompt}, dynamic, dramatic, Futurism Art Style",
        translation: "未来主义艺术风格，{提示}，动态，戏剧性，未来主义艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-故障核心",
        prompt: "Glitchcore Art Style, {prompt}, dynamic, dramatic, distorted, vibrant colors, glitchcore art style",
        translation: "故障核心艺术风格，{提示}，动态的，戏剧性的，扭曲的，鲜艳的颜色，Glitchcore艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-格洛菲",
        prompt: "Glo-fi Art Style, {prompt}, dynamic, dramatic, vibrant colors, glo-fi art style",
        translation: "格洛菲艺术风格，{提示}，动态，戏剧性，鲜艳的色彩，高保真艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-古奇艺术风格",
        prompt: "Googie Art Style, {prompt}, dynamic, dramatic, 1950's futurism, bold boomerang angles, Googie art style",
        translation: "古吉艺术风格，{提示}，动态，戏剧性，20世纪50年代的未来主义，大胆的回旋镖角度，Googie艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-涂鸦艺术",
        prompt: "Graffiti Art Style, {prompt}, dynamic, dramatic, vibrant colors, graffiti art style",
        translation: "涂鸦艺术风格，{提示}，动态，戏剧性，鲜艳的色彩，涂鸦艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-哈莱姆文艺复兴艺术",
        prompt: "Harlem Renaissance Art Style, {prompt}, dynamic, dramatic, 1920s African American culture, Harlem Renaissance art style",
        translation: "哈莱姆文艺复兴艺术风格，{提示}，动态，戏剧性，20世纪20年代非裔美国文化，哈莱姆文艺复兴艺术风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-高级时装",
        prompt: "High Fashion, {prompt}, dynamic, dramatic, haute couture, elegant, ornate clothing, High Fashion",
        translation: "高级时装，{提示}，动态，戏剧性，高级时装，优雅，华丽的服装，高级时装",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-田园诗般的",
        prompt: "Idyllic, {prompt}, peaceful, happy, pleasant, happy, harmonious, picturesque, charming",
        translation: "田园诗般的、{提示}的、祥和的、愉快的、愉快的、和谐的、如画的、迷人的",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-印象派",
        prompt: "Impressionism, {prompt}, painterly, small brushstrokes, visible brushstrokes, impressionistic style",
        translation: "印象派，{提示}，绘画，小笔触，可见的笔触，印象派风格",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-信息图绘制",
        prompt: "Infographic Drawing, {prompt}, diagram, infographic",
        translation: "信息图绘图，{提示}，图表，信息图",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-滴墨图",
        prompt: "Ink Dripping Drawing, {prompt}, ink drawing, dripping ink",
        translation: "滴墨画，{提示}，滴墨画，滴墨",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, colorful, vibrant",
        category: "艺术2"
    },
    {
        name: "艺术2-日本水墨画",
        prompt: "Japanese Ink Drawing, {prompt}, ink drawing, inkwash, Japanese Ink Drawing",
        translation: "日本水墨画，{提示}，水墨画，水墨，日本水墨画",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, colorful, vibrant",
        category: "艺术2"
    },
    {
        name: "艺术2-整理摄影",
        prompt: "Knolling Photography, {prompt}, flat lay photography, object arrangment, knolling photography",
        translation: "整理摄影，{提示}，平铺摄影，物体排列，小丘摄影",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-明亮愉快的氛围",
        prompt: "Light Cheery Atmosphere, {prompt}, happy, joyful, cheerful, carefree, gleeful, lighthearted, pleasant atmosphere",
        translation: "欢快的气氛，{提示}，快乐的，快乐的，愉快的，无忧无虑的，愉快的，轻松愉快的气氛",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, monochromatic, dark, moody",
        category: "艺术2"
    },
    {
        name: "艺术2-Logo设计",
        prompt: "Logo Design, {prompt}, dynamic graphic art, vector art, minimalist, professional logo design",
        translation: "标志设计，{提示}，动态图形艺术，矢量艺术，极简主义，专业标志设计",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-奢华优雅",
        prompt: "Luxurious Elegance, {prompt}, extravagant, ornate, designer, opulent, picturesque, lavish",
        translation: "优雅，{提示}，奢侈的，华丽的，设计师的，华丽的，如画的，奢华的",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-微距摄影",
        prompt: "Macro Photography, {prompt}, close-up, macro 100mm, macro photography",
        translation: "微距摄影，{提示}，特写，微距100mm，微距摄影",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-曼陀拉艺术",
        prompt: "Mandola art style, {prompt}, complex, circular design, mandola",
        translation: "曼陀罗艺术风格，{提示}，复杂，圆形设计，曼陀罗",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-标记绘图",
        prompt: "Marker Drawing, {prompt}, bold marker lines, visibile paper texture, marker drawing",
        translation: "标记绘图，{提示}，粗体标记线，可见纸张纹理，标记绘图",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, photograph, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-中世纪艺术",
        prompt: "Medievalism, {prompt}, inspired by The Middle Ages, medieval art, elaborate patterns and decoration, Medievalism",
        translation: "中世纪主义，{提示}，灵感来自中世纪，中世纪艺术，精致的图案和装饰，中世纪主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-极简主义",
        prompt: "Minimalism, {prompt}, abstract, simple geometic shapes, hard edges, sleek contours, Minimalism",
        translation: "极简主义，{提示}，抽象，简单的几何形状，硬边缘，圆滑的轮廓，极简主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-新巴洛克风格",
        prompt: "Neo-Baroque, {prompt}, ornate and elaborate, dynaimc, Neo-Baroque",
        translation: "新巴洛克，{提示}，华丽和精心制作，动态，新巴洛克",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-新拜占庭风格",
        prompt: "Neo-Byzantine, {prompt}, grand decorative religious style, Orthodox Christian inspired, Neo-Byzantine",
        translation: "新拜占庭，{提示}，宏伟的装饰宗教风格，东正教的启发，新拜占庭",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-新未来主义",
        prompt: "Neo-Futurism, {prompt}, high-tech, curves, spirals, flowing lines, idealistic future, Neo-Futurism",
        translation: "新未来主义，{提示}，高科技，曲线，螺旋，流动的线条，理想主义的未来，新未来主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-新印象派",
        prompt: "Neo-Impressionism, {prompt}, tiny dabs of color, Pointillism, painterly, Neo-Impressionism",
        translation: "新印象派，{提示}，小斑点的颜色，点彩，绘画，新印象派",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, photograph, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-新洛可可",
        prompt: "Neo-Rococo, {prompt}, curved forms, naturalistic ornamentation, elaborate, decorative, gaudy, Neo-Rococo",
        translation: "新洛可可，{提示}，弯曲的形式，自然主义的装饰，精心制作，装饰，华艳，新洛可可",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-新古典主义",
        prompt: "Neoclassicism, {prompt}, ancient Rome and Greece inspired, idealic, sober colors, Neoclassicism",
        translation: "新古典主义，{提示}，古罗马和希腊的灵感，理想的，冷静的颜色，新古典主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-欧普艺术",
        prompt: "Op Art, {prompt}, optical illusion, abstract, geometric pattern, impression of movement, Op Art",
        translation: "欧普艺术，{提示}，视错觉，抽象，几何图案，运动印象，欧普艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-华丽而复杂",
        prompt: "Ornate and Intricate, {prompt}, decorative, highly detailed, elaborate, ornate, intricate",
        translation: "华丽的和复杂的，{提示}，装饰性的，非常详细的，精心的，华丽的，复杂的",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-铅笔素描绘画",
        prompt: "Pencil Sketch Drawing, {prompt}, black and white drawing, graphite drawing",
        translation: "铅笔素描，{提示}，黑白图，石墨图",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-波普艺术2",
        prompt: "Pop Art, {prompt}, vivid colors, flat color, 2D, strong lines, Pop Art",
        translation: "波普艺术，{提示}，生动的色彩，平面的色彩，2D，强烈的线条，波普艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, photo, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-洛可可",
        prompt: "Rococo, {prompt}, flamboyant, pastel colors, curved lines, elaborate detail, Rococo",
        translation: "洛可可，{提示}，华丽的，柔和的颜色，弯曲的线条，精致的细节，洛可可",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-剪影艺术",
        prompt: "Silhouette Art, {prompt}, high contrast, well defined, Silhouette Art",
        translation: "剪影艺术，{提示}，高对比度，明确，剪影艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-简单矢量艺术",
        prompt: "Simple Vector Art, {prompt}, 2D flat, simple shapes, minimalistic, professional graphic, flat color, high contrast, Simple Vector Art",
        translation: "简单矢量艺术，{提示}，2D平面，简单的形状，极简主义，专业图形，平面颜色，高对比度，简单矢量艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, 3D, photo, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-草图",
        prompt: "Sketchup, {prompt}, CAD, professional design, Sketchup",
        translation: "草图，{提示}，CAD，专业设计，Sketchup",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, photo, photograph",
        category: "艺术2"
    },
    {
        name: "艺术2-蒸汽朋克2",
        prompt: "Steampunk, {prompt}, retrofuturistic science fantasy, steam-powered tech, vintage industry, gears, neo-victorian, steampunk",
        translation: "蒸汽朋克，{提示}，复古未来的科学幻想，蒸汽动力技术，复古工业，齿轮，新维多利亚时代，蒸汽朋克",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-超现实主义",
        prompt: "Surrealism, {prompt}, expressive, dramatic, organic lines and forms, dreamlike and mysterious, Surrealism",
        translation: "超现实主义，{提示}，富有表现力，戏剧性，有机的线条和形式，梦幻和神秘，超现实主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-至上主义",
        prompt: "Suprematism, {prompt}, abstract, limited color palette, geometric forms, Suprematism",
        translation: "至上主义，{提示}，抽象，有限的调色板，几何形式，至上主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-大地艺术",
        prompt: "Terragen, {prompt}, beautiful massive landscape, epic scenery, Terragen",
        translation: "大地，{提示}，美丽的巨大景观，史诗般的风景，大地",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-宁静放松的氛围",
        prompt: "Tranquil Relaxing Atmosphere, {prompt}, calming style, soothing colors, peaceful, idealic, Tranquil Relaxing Atmosphere",
        translation: "宁静放松的气氛，{提示}，平静的风格，舒缓的颜色，和平，理想，宁静放松的气氛",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, oversaturated",
        category: "艺术2"
    },
    {
        name: "艺术2-贴纸设计",
        prompt: "Vector Art Stickers, {prompt}, professional vector design, sticker designs, Sticker Sheet",
        translation: "矢量艺术贴纸，{提示}，专业矢量设计，贴纸设计，贴纸表",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-充满活力的边缘光",
        prompt: "Vibrant Rim Light, {prompt}, bright rim light, high contrast, bold edge light",
        translation: "动感的边缘光，{提示}，明亮的边缘光，高对比度，大胆的边缘光",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-体积照明",
        prompt: "Volumetric Lighting, {prompt}, light depth, dramatic atmospheric lighting, Volumetric Lighting",
        translation: "体积照明，{提示}，光深度，戏剧性的大气照明，体积照明",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "艺术2"
    },
    {
        name: "艺术2-水彩2",
        prompt: "Watercolor style painting, {prompt}, visible paper texture, colorwash, watercolor",
        translation: "水彩风格绘画，{提示}，可见纸的纹理，彩色洗，水彩",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, photo, realistic",
        category: "艺术2"
    },
    {
        name: "艺术2-奇幻和活泼",
        prompt: "Whimsical and Playful, {prompt}, imaginative, fantastical, bight colors, stylized, happy, Whimsical and Playful",
        translation: "异想天开和俏皮，{提示}，富有想象力，幻想，明亮的颜色，风格化，快乐，异想天开和俏皮",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, drab, boring, moody",
        category: "艺术2"
    },
    {
        name: "电影女主角",
        prompt: "UHD, 8K, ultra detailed, a cinematic photograph of {prompt}, beautiful lighting, great composition",
        translation: "超高清，8K，超细节，一个电影的照片{提示}，美丽的灯光，伟大的构图",
        negative_prompt: "ugly, deformed, noisy, blurry, NSFW",
        category: "其他"
    },
    {
        name: "抽象表现主义",
        prompt: "Abstract Expressionism Art, {prompt}, High contrast, minimalistic, colorful, stark, dramatic, expressionism",
        translation: "抽象表现主义艺术，{提示}，高对比度，极简主义，色彩丰富，鲜明，戏剧性，表现主义",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, realism, photorealistic",
        category: "其他"
    },
    {
        name: "学术界",
        prompt: "Academia, {prompt}, preppy Ivy League style, stark, dramatic, chic boarding school, academia",
        translation: "学术界，{提示}，学院风格的常春藤联盟，鲜明的，戏剧性的，别致的寄宿学校，学术界",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, grunge, sloppy, unkempt",
        category: "其他"
    },
    {
        name: "可动人偶",
        prompt: "Action Figure, {prompt}, plastic collectable action figure, collectable toy action figure",
        translation: "动作人偶，{提示}，塑料可收集动作人偶，可收集玩具动作人偶",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast",
        category: "其他"
    },
    {
        name: "可爱的3D角色",
        prompt: "Adorable 3D Character, {prompt}, 3D render, adorable character, 3D art",
        translation: "可爱的3D角色，{提示}，3D渲染，可爱的角色，3D艺术",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, grunge, sloppy, unkempt, photograph, photo, realistic",
        category: "其他"
    },
    {
        name: "可爱的卡哇伊",
        prompt: "Adorable Kawaii, {prompt}, pretty, cute, adorable, kawaii",
        translation: "可爱的卡哇伊，{提示}，漂亮，可爱，可爱，卡哇伊",
        negative_prompt: "ugly, deformed, noisy, blurry, low contrast, gothic, dark, moody, monochromatic",
        category: "其他"
    },
    {
        name: "2.5D半写实肖像",
        prompt: "Semi-realistic 3D portrait of {prompt}, rendered in Blender 3D style, with exquisite anime-style features. Soft light, cinematic, sub-surface scattering skin.",
        translation: "半写实3D肖像{prompt}，Blender 3D渲染风格，具有动漫风格的精致五官。柔和的光线，电影感，次表面散射效果的皮肤，",
        negative_prompt: "photo, deformed, monochrome, black and white, realism, disfigured",
        category: "其他"
    },
    {
        name: "吉卜力工作室",
        prompt: "Studio Ghibli, {prompt} . Asian, Ghibli style, the Art of Hayao Miyazaki, key visual, vibrant, studio anime, highly detailed",
        translation: "吉卜力工作室，{提示}。亚洲，吉卜力风格，宫崎骏艺术，重点视觉，充满活力，工作室动画，高度细致",
        negative_prompt: "photo, deformed, black and white, realism, disfigured, low contrast",
        category: "其他"
    },
    {
        name: "CWF新海诚风格",
        prompt: "CoMix Wave Films, {prompt} . Asian, CWF studio style, the Art of Makoto Shinkai, key visual, vibrant, studio anime, Romantic and aesthetic， brightly colored, highly detailed",
        translation: "CoMix Wave Films，{提示}。亚洲，CWF工作室风格，新海诚艺术，重点视觉，充满活力，工作室动画，浪漫和美学，色彩鲜艳，高度细致",
        negative_prompt: "photo, deformed, black and white, realism, disfigured, low contrast",
        category: "其他"
    },
    {
        name: "鸟山明风格",
        prompt: "Toriyama Akira style, {prompt} . Asian, bokeh, the Art of Toriyama Akira, key visual, vibrant, studio anime, highly detailed",
        translation: "鸟山明风格，{提示}。亚洲，散景，鸟山明的艺术，关键的视觉，充满活力，工作室动画，高度详细",
        negative_prompt: "photo, deformed, black and white, realism, disfigured, low contrast",
        category: "其他"
    },
    {
        name: "卡通3D图标",
        prompt: "Cartoon 3D icon, {prompt} . UI icon, 3D rendering, smooth and shiny! realistic use of light and color, soft gradient, best details, high definition, high resolution",
        translation: "卡通3D图标，{提示}。UI图标，3D渲染，平滑发亮！现实使用的光和颜色，柔和的渐变，最好的细节，高清，高分辨率",
        negative_prompt: "photo, deformed, monochrome, black and white, realism, disfigured",
        category: "其他"
    },
    {
        name: "黏土风",
        prompt: "Colorful clothes and backgrounds, clay style {prompt}. Sculpture, surface fingerprints, Earthy tone, clay art, centered composition, Claymation",
        translation: "五颜六色的衣服和背景，粘土风格{提示}。雕塑，表面指纹，泥土色调，粘土艺术，中心构图，粘土",
        negative_prompt: "sloppy, messy, grainy, highly detailed, ultra textured, photo",
        category: "其他"
    },
    {
        name: "青铜雕塑",
        prompt: "Bronze sculpture of {prompt}, copper rust, Renaissance art, European Sculpture style, works by Michelangelo",
        translation: "青铜雕塑，铜锈，文艺复兴时期的艺术，欧洲雕塑风格，作品由米开朗基罗",
        negative_prompt: "abstract, vibrant colors",
        category: "其他"
    },
    {
        name: "大理石雕塑",
        prompt: "Marble sculpture of {prompt}, white surface, Renaissance art, European Sculpture style, works by Michelangelo",
        translation: "大理石雕塑，白色表面，文艺复兴时期的艺术，欧洲雕塑风格，作品由米开朗基罗",
        negative_prompt: "abstract, vibrant colors",
        category: "其他"
    },
    {
        name: "性感女孩",
        prompt: "explicit photo shooting style {prompt} . casting pose, perfect rond breast, perfect body,highly detailed, perfect hands, extremely realistic face,perfect eyes and long eyelashes, symmetrical perfect eyes, skin pores, ultra detailed, RAW photo",
        translation: "露骨照片拍摄风格{prompt}。选角姿势，完美的圆胸，完美的身材，高度细致，完美的双手，极其逼真的脸，完美的眼睛和长睫毛，对称的完美眼睛，皮肤毛孔，超细致，RAW照片",
        negative_prompt: "disfigured, disproportionate, bad anatomy, bad proportions, ugly, out of frame, mangled, asymmetric, cross-eyed, depressed, immature, stuffed animal, out of focus, high depth of field, cloned face, cloned head, age spot, skin blemishes, collapsed eyeshadow, asymmetric ears, imperfect eyes, unnatural, conjoined, missing limb, missing arm, missing leg, poorly drawn face, poorly drawn feet, poorly drawn hands, floating limb, disconnected limb, extra limb, malformed limbs, malformed hands, poorly rendered face, poor facial details, poorly rendered hands, double face, unbalanced body, unnatural body, lacking body, long body, cripple, old, fat, cartoon, 3D, weird colors, unnatural skin tone, unnatural skin, stiff face, fused hand, skewed eyes, surreal, cropped head, group of people",
        category: "Cyberbill"
    },
    {
        name: "羊毛制品",
        prompt: "a wool {prompt} . made of wool, lots of threads, very complex, very detailed, realistically rendered, very contrasted, well-defined shadow",
        translation: "羊毛{提示}。羊毛，很多线，非常复杂，非常详细，写实的渲染，非常对比，明确的阴影",
        negative_prompt: "noisy, blurry, amateurish, sloppy, unattractive, real skin, real material, real object",
        category: "Cyberbill"
    },
    {
        name: "金线风格",
        prompt: "gold thread {prompt} . made of gold thread; lots of threads; very complex , artistic and baroque arrangement of gold threads, very detailed; realistically rendered, very contrasted,well-defined shadow",
        translation: "金线{提示}。金线制成的；很多线程；非常复杂，艺术和巴洛克式排列的金线，非常细致；现实的渲染，非常对比，明确的阴影",
        negative_prompt: "noisy, blurry, amateurish, sloppy, unattractive, real skin, real object,iron, copper, silver,skin",
        category: "Cyberbill"
    },
    {
        name: "牛仔布拼接",
        prompt: "gold thread {prompt} . ((entirely made of pieces of sewn used denim patchwork fabrics)), very detailed; realistically rendered, very contrasted,well-defined shadow",
        translation: "金线{提示}。（完全由一块块用牛仔布拼接面料缝制而成），非常细致；现实的渲染，非常对比，明确的阴影",
        negative_prompt: "noisy, blurry, amateurish, sloppy, unattractive",
        category: "Cyberbill"
    },
    {
        name: "超级英雄",
        prompt: "{prompt} . ([marvel|DC Comics] superhero, super powered, gorgeous, proud, strong,incredible, determined,hero attitude), very detailed, realistically rendered, very contrasted, well-defined shadow, photo realistic",
        translation: "{提示}。（[漫威|DC漫画]超级英雄，超能力，华丽，骄傲，强壮，不可思议，坚定，英雄的态度），非常细致，逼真的渲染，非常对比，明确的阴影，照片般的逼真",
        negative_prompt: "noisy, blurry, amateurish, sloppy, unattractive",
        category: "Cyberbill"
    },
    {
        name: "镜头耀斑日落",
        prompt: "(Cinematic Shot:1.3)(Shot on Aaton LTR 54) {prompt} . ((35mm, F/2.8) Photo Focus, DOF, Aperture, (DOF, blurry background, sunrise in the back of subject)(Lens Flare, Heresy flare:1.3),(sharpness, details, contrast, warm tones:1.5)(Dark Sky:1.3), sunset",
        translation: "（电影镜头：1.3）（在Aaton LTR 54上拍摄）{提示}。（35mm, F/2.8）照片对焦，DOF，光圈，（DOF，背景模糊，拍摄对象背后的日出）（镜头光晕，异端光晕：1.3），（锐度，细节，对比度，暖色调：1.5）（暗天：1.3），日落",
        negative_prompt: "cropped, regular face, deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck",
        category: "Cyberbill"
    },
    {
        name: "七十年代风格",
        prompt: "(old 1970 vintage photo, EF 35) {prompt} . (environnement 1970, 1970 colors, 1970 artstyle)",
        translation: "（1970年旧照片，EF 35）{提示}。（环境1970，颜色1970，艺术风格1970）",
        negative_prompt: "cropped, regular face, deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, text, cropped, out of frame, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, current, modern, saturated, bright color, futuristic, unreal, professional, poorly framed, cut out, subject out of frame",
        category: "Cyberbill"
    },
    {
        name: "充气娃娃",
        prompt: "(Latex love doll:1.3) ((open mouth, pouty lips :1.7)) fake hairs {prompt} . perfect rond breast, perfect body, highly detailed, perfect hands, perfect eyes and long eyelashes, symmetrical perfect eyes , ultra detailed, RAW photo",
        translation: "（乳胶充气娃娃：1.3）（（张嘴，噘嘴：1.7））假毛{提示}。完美的圆胸，完美的身材，高度细致，完美的双手，完美的眼睛和长睫毛，对称的完美眼睛，超细节，RAW照片",
        negative_prompt: "cropped, regular face, deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, text, cropped, out of frame, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, current, modern, saturated, bright color, futuristic, unreal, professional, poorly framed, cut out, subject out of frame",
        category: "Cyberbill"
    },
    {
        name: "斐波那契螺旋",
        prompt: "shape drawing of {prompt} . made of bright and shiny colored pixels arranged in a Fibonacci spiral, multi-colored, on a very psychedelic background, very marked shadow and light, vibrant colors",
        translation: "{提示}的形状绘制。由明亮闪亮的彩色像素组成，以斐波那契螺旋排列，多色，在非常迷幻的背景上，非常明显的阴影和光线，充满活力的颜色",
        negative_prompt: "dull, gray, ugly, realistic, cut, poor, dark, real",
        category: "Cyberbill"
    },
    {
        name: "分形颜色",
        prompt: "{prompt} . fractal style drawing, fractal spiral, fractal motif, fractal shape, Fractal colors, fractal environnement, bright colors, HDR, strong contrast",
        translation: "{提示}。分形风格绘画，分形螺旋，分形图案，分形形状，分形色彩，分形环境，色彩鲜艳，HDR，对比强烈",
        negative_prompt: "dull, gray, ugly, realistic, cut, poor, dark, real",
        category: "Cyberbill"
    },
    {
        name: "分形单位",
        prompt: "{prompt} . fractal style drawing, fractal spiral, fractal motif, fractal shape, Fractal colors, fractal environnement, bright colors, HDR, strong contrast",
        translation: "{提示}。分形风格绘画，分形螺旋，分形图案，分形形状，分形色彩，分形环境，色彩鲜艳，HDR，对比强烈",
        negative_prompt: "ugly, realistic, cut, poor, real",
        category: "Cyberbill"
    },
    {
        name: "低角度图像",
        prompt: "seen from below {prompt} . (((low angle image , vanishing point of the image at the top center))),perfect render, HDR, 8k, best quality",
        translation: "从下面看{prompt}。（（低角度图像，图像消失点在顶部中心））))，完美渲染，HDR, 8k，画质最佳",
        negative_prompt: "bad anatomy,bad proportions,blurry,cloned face,cropped,deformed,dehydrated,disfigured,duplicate,error,extra arms,extra fingers,extra legs,extra limbs,fused fingers,gross proportions,jpeg artifacts,long neck,low quality,lowres,malformed limbs,missing arms,missing legs,morbid,mutated hands,mutation,mutilated,out of frame,poorly drawn face,poorly drawn hands,signature,text,too many fingers,ugly,username,watermark,worst quality",
        category: "Cyberbill"
    },
    {
        name: "微距照片",
        prompt: "photographed very closely {prompt} . Very tight shot, macro, very marked contrasts, ultra detailed, very perseptable texture, f/11 ISO100,(((ultra bright color))),HDR,8k,made professional, hyper realistic, saturated color",
        translation: "近距离拍摄{提示}。非常近距离拍摄，微距，非常明显的对比，超细节，非常清晰的纹理，f/11 ISO100,（（超亮的颜色）），HDR,8k，制作专业，超逼真，饱和色彩",
        negative_prompt: "bad anatomy,bad proportions,blurry,cloned face,cropped,deformed,dehydrated,disfigured,duplicate,error,extra arms,extra fingers,extra legs,extra limbs,fused fingers,gross proportions,jpeg artifacts,long neck,low quality,lowres,malformed limbs,missing arms,missing legs,morbid,mutated hands,mutation,mutilated,out of frame,poorly drawn face,poorly drawn hands,signature,text,too many fingers,ugly,username,watermark,worst quality",
        category: "Cyberbill"
    },
    {
        name: "x射线",
        prompt: "{prompt} . X-ray style, (((complete X-ray))), showing the bones and soft tissues, bones clearly visible, soft tissues sufficiently contrasted for detailed analysis BREAK The X-ray should be in black and white and have sufficient resolution for detailed analysis",
        translation: "{提示}。x线风格，（（完整x线））)，显示骨骼和软组织，骨骼清晰可见，软组织对比充分，可以进行详细分析。x线应为黑白，具有足够的分辨率，可以进行详细分析",
        negative_prompt: "color, perspective, 3d,opaque,shadow, contrast, cut,incomplete",
        category: "Cyberbill"
    },
    {
        name: "花艺风格",
        prompt: "{prompt} . floral art, very artistic composition, bright colors, natural flowers, homogeneous distribution, very varied species of flowers, multicolor flowers, very high definition, very detailed ,the flowers are fresh, bright colors",
        translation: "{提示}。花卉艺术，构图非常艺术，色彩鲜艳，花卉自然，分布均匀，花卉种类繁多，花卉多色，清晰度非常高，非常细致，花卉清新，色彩鲜艳",
        negative_prompt: "Dark, dead,sad, amateur",
        category: "Cyberbill"
    },
    {
        name: "飞溅油漆风格",
        prompt: "{prompt} . front of a black background, multiple splashes of fluorescent multicolor paint crash onto the black background, splashes fallow the shap of the subject, ((the movements of the paint leave a liminous trail)), the painting gradually blends with the subject, HDR, ultra glossy paint, multicolor smoke backgroud, studio lighting",
        translation: "{提示}。在黑色背景的前面，荧光多色油漆的多次飞溅撞击到黑色背景上，飞溅的物体的形状，（油漆的运动留下模糊的痕迹）)，绘画逐渐与物体融合，HDR，超光泽油漆，多色烟雾背景，工作室照明",
        negative_prompt: "Dark, dead,sad, amateur",
        category: "Cyberbill"
    },
    {
        name: "闪亮的",
        prompt: "{prompt} . bling rapper style extravagant ostentatious, display of outward signs of wealth, gold and diamonds rhinestones and sequins, HDR, ultra detailed",
        translation: "{提示}。珠光宝气的饶舌歌手风格奢侈浮夸，炫耀财富的外在标志，黄金和钻石，水钻和亮片，HDR，超细致",
        negative_prompt: "poor, unsightly, amateur, black and white, poorly done, dark, sad,ugly",
        category: "Cyberbill"
    },
    {
        name: "IMVU游戏风格",
        prompt: "{prompt} . IMVU game style (open GL render), low resolution",
        translation: "{提示}。IMVU游戏风格（开放GL渲染），低分辨率",
        negative_prompt: "Dark, dead,sad, realistic, HDR",
        category: "Cyberbill"
    },
    {
        name: "混乱的风格",
        prompt: "{prompt} . chaotic style, turbulence, colorful, hyper random place, unexpected, unreal,unhoped for,high contrast, randomly ultra colored lighting and particles, misaligned,bright color, disorganized",
        translation: "{提示}。混乱的风格，湍流，彩色，超随机的地方，意想不到的，不真实的，不希望的，高对比度，随机超彩色的灯光和粒子，错位，明亮的颜色，混乱",
        negative_prompt: "black and white, serious, sad, organized",
        category: "Cyberbill"
    },
    {
        name: "惊悚风格",
        prompt: "{prompt} . pale light, stagnant smoke which invades the entire photo, rays of moonlight on the side, very marked shadow, cold atmosphere, poorly colored, cold color, sad, serious, silent, boring, thriller atmosphere, thrill,fear, realistic, HD, inspired horror movie, professional framing, professional staging",
        translation: "{提示}。苍白的光线，侵入整个照片的停滞的烟雾，侧面的月光，非常明显的阴影，冷气氛，色彩差，冷色调，悲伤，严肃，沉默，无聊，惊悚气氛，刺激，恐惧，现实，高清，灵感恐怖电影，专业取景，专业舞台",
        negative_prompt: "joyful, colorful, cheerful, warm, warmth, bright colors, multi-colored",
        category: "Cyberbill"
    },
    {
        name: "Asccii艺术风格",
        prompt: "{prompt} . ascii art style, the ascii characters are in multicolor, colors nuances brings out subtle shadows, there are only characters from lettersletters of the alphabet, the image pixels are ascii characters, the image is simple and poor in detail",
        translation: "{提示}。ASCII艺术风格，ASCII字符是多色的，颜色的细微差别带来了微妙的阴影，只有字母的字母，图像像素是ASCII字符，图像简单，细节差",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, duplicate, bad proportions, disfigured",
        category: "Cyberbill"
    },
    {
        name: "印刷电路",
        prompt: "{prompt} . (((masterpiece sculpture made of complexe printed circuit))), ((made of shiny printed circuit on a black PCB)), technological aspect,Bright micro LEDs distributed randomly throughout the sculpture they emit a soft warm light, the blending of circuits created subtle shadows,multiple connections of light fiber optic network arround the shape, 4k, ultra-detailed",
        translation: "{提示}。（（由复杂印刷电路制成的杰作）），（（由黑色PCB上闪亮的印刷电路制成）），技术方面，明亮的微型led随机分布在整个雕塑中，它们发出柔和的暖光，电路的混合创造了微妙的阴影，围绕形状的多个光纤网络连接，4k，超细节",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, duplicate, bad proportions, disfigured",
        category: "Cyberbill"
    },
    {
        name: "穆拉诺玻璃风格",
        prompt: "{prompt} . Murano style glass sculpture outline style abstract, made of colorful swirling ((transparent)) disperssive inconsistent smoke with no notable features",
        translation: "{提示}。穆拉诺风格的玻璃雕塑轮廓抽象风格，由五彩缤纷的旋涡状（（透明））分散不一致的烟雾构成，没有明显的特征",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, duplicate, bad proportions, disfigured",
        category: "Cyberbill"
    },
    {
        name: "抽象几何图案",
        prompt: "{prompt} . seamless geometric abstract pattern geometric drawing shapes, art work, Trendy colorful background design, artistic style texture, bright and cheerful colors",
        translation: "{提示}。无缝几何抽象图案几何绘制形状，艺术作品，新潮多彩的背景设计，艺术风格的质感，明亮欢快的色彩",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly",
        category: "Cyberbill"
    },
    {
        name: "大卫街头艺术风格",
        prompt: "{prompt} . drawing of Statue David street grafitti style, colored canvas wall art, graffiti Pop art distributed randomly, illustration isolated on black background ,very beautiful shadows",
        translation: "{提示}。大卫雕像的街头涂鸦风格，彩色帆布墙艺术，随机分布的涂鸦波普艺术，插图孤立在黑色背景上，非常漂亮的阴影",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly",
        category: "Cyberbill"
    },
    {
        name: "拼贴图案",
        prompt: "{prompt} . a collection of different types and random poses, random color, isolated on a background, isometric flat art cartoon style, vivid colors, 8K",
        translation: "{提示}。不同类型和随机姿势的集合，随机颜色，孤立在一个背景上，等距平面艺术卡通风格，色彩鲜艳，8K",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed",
        category: "Cyberbill"
    },
    {
        name: "平面矢量圆圈",
        prompt: "{prompt} . flat shape, flat design, vector, (circle concentric geometric), geometric composition, square shapes are angular, ultra detailed form, solid color, abstract, artistic work, vivid colors",
        translation: "{提示}。平面造型、平面设计、矢量、（圆同心圆几何）、几何构图、方形造型都是棱角分明、超细致的形式、纯色、抽象、艺术的作品、生动的色彩",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed, real, photographed",
        category: "Cyberbill"
    },
    {
        name: "3D线框图",
        prompt: "{prompt} . 3d ((line drawing)), (solid colors), (quads topology),(3D wireframe model rendering style:1.8),high polygon",
        translation: "{提示}。3d（（线条绘制）），（纯色），（四边形拓扑），（3d线框模型渲染样式：1.8），高多边形",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed, real, photographed",
        category: "Cyberbill"
    },
    {
        name: "90年代3D游戏",
        prompt: "{prompt} . (((1990 3D PC video game style, heavily pixelated textures,heavily aliasing))),poor in polygons, 8 bits color palette",
        translation: "{提示}。（（1990年的3D PC电子游戏风格，严重像素化的纹理，严重混叠））)，糟糕的多边形，8位调色板",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed, real, photographed,shadow,light reflection, shading, high quality, realistic, modern",
        category: "Cyberbill"
    },
    {
        name: "童话公主风格",
        prompt: "{prompt} . ((fashion photography)) of random fairy tale princess, ([Belle|Cinderella|Snow White|Aurora|Rapunzel|Jasmine|Merida|Elsa|Anna|Tiana|Moana|The Twelve Dancing Princesses|Rose Red|The Princess and the Pea|Thumbelina|The Wild Swans] princess), perfect body,highly detailed, perfect hands, extremely realistic face,perfect eyes and long eyelashes, symmetrical perfect eyes, skin pores, ultra detailed, RAW photo,8k, cinematic photography,photorealistic,extremely detailed, sharp-focus , Canon EOS 5D Mark IV DSLR",
        translation: "{提示}。（（时尚摄影））随机童话公主，（[贝尔|灰姑娘|白雪公主|奥罗拉|长发公主|茉莉|梅里达|艾莎|安娜|提安娜|莫阿娜|十二个跳舞公主|玫瑰红|公主和豌豆|拇指姑娘|野天鹅]公主），完美的身体，高度细节，完美的手，极其逼真的脸，完美的眼睛和长睫毛，对称完美的眼睛，皮肤毛孔，超细节，RAW照片，8k，电影摄影，逼真，极其细节，清晰聚焦，佳能EOS 5D Mark IV单反",
        negative_prompt: "disfigured, disproportionate, bad anatomy, bad proportions, ugly, out of frame, mangled, asymmetric, cross-eyed, depressed, immature, stuffed animal, out of focus, high depth of field, cloned face, cloned head, age spot, skin blemishes, collapsed eyeshadow, asymmetric ears, imperfect eyes, unnatural, conjoined, missing limb, missing arm, missing leg, poorly drawn face, poorly drawn feet, poorly drawn hands, floating limb, disconnected limb, extra limb, malformed limbs, malformed hands, poorly rendered face, poor facial details, poorly rendered hands, double face, unbalanced body, unnatural body, lacking body, long body, cripple, old, fat, cartoon, 3D, weird colors, unnatural skin tone, unnatural skin, stiff face, fused hand, skewed eyes, surreal, cropped head, group of people,3d, digital art,cropped, out of frame, jpeg artifacts, ugly, deformed",
        category: "Cyberbill"
    },
    {
        name: "绉纸风格",
        prompt: "crepe paper representation of {prompt} . handmade, textured paper, 3D artistic work, vivid colors",
        translation: "绉纸表示{prompt}。手工制作，纹理纸，3D艺术作品，色彩鲜艳",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed",
        category: "Cyberbill"
    },
    {
        name: "单色屏幕风格",
        prompt: "monochrome 2D dot matrix green pixels representation of {prompt} . on a black background , solid bright green color, solid black color, unreal , ultra pixelated, low resolution, ultra low detail, infinite contrast, [black:green: 0.5]",
        translation: "单色二维点阵绿色像素表示{prompt}。黑色背景，纯亮绿色，纯黑色，不真实，超像素化，低分辨率，超低细节，无限对比度，[黑：绿：0.5]",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed",
        category: "Cyberbill"
    },
    {
        name: "消失的太阳 基于墨水",
        prompt: "ink illustration, ink stains, ink splatters, ink runs, ink spots, faded ink, evanescent ink,natural lighting, monochromatic, warm and gentle ray of sunshine, enveloped in ribbons of smok , random fractal disposition, joy happiness, impulse of joy, represenation of {prompt} . extremely detailed",
        translation: "水墨插画，墨迹，溅墨，墨迹，墨点，褪墨，逝墨，自然光线，单色，温暖柔和的阳光，笼罩在烟雾的丝带中，随机分形的性情，快乐的幸福，快乐的冲动，{提示}的表征。非常详细",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, deformed",
        category: "Cyberbill"
    },
    {
        name: "皮克斯工作室",
        prompt: "pixar style, masterpiece, soft studio light, {prompt} . pixar character, image inspired by the Pixar universe, 4k, 8k, HDR, high details, cinematographic rendering, professional, incredible, fun, funny, RenderMan rendering",
        translation: "皮克斯风格，杰作，软工作室灯光，{提示}。皮克斯人物，图像灵感来自皮克斯宇宙，4k, 8k， HDR，高细节，电影渲染，专业，不可思议，有趣，有趣，RenderMan渲染",
        negative_prompt: "colorless rendition, extremely poor quality, subpar quality, average quality, awkward cropping, out of focus, incorrect anatomy, rough sketch, low resolution, deformed, additional hand, extra digit, excessive JPEG artifacts, visible signature, prominent watermark, username distraction, artist name overshadowing",
        category: "Cyberbill"
    },
    {
        name: "情人节",
        prompt: "Valentine's day style, hearts, flowers, rose petals, red, romantic atmosphere, sunset, love, butterflies, doves, {prompt} . very detailed, professional rendering, k4, 8k, HDR, very detailed, beautiful, magnificent, fantastic, incredible",
        translation: "情人节风格，心形，鲜花，玫瑰花瓣，红色，浪漫气氛，夕阳，爱情，蝴蝶，鸽子，{提示}。非常详细，专业渲染，k4, 8k， HDR，非常详细，美丽，宏伟，梦幻般的，令人难以置信",
        negative_prompt: "disfigured, disproportionate, bad anatomy, bad proportions, ugly, out of frame, mangled, asymmetric, cross-eyed, depressed, immature, stuffed animal, out of focus, high depth of field, cloned face, cloned head, age spot, skin blemishes, collapsed eyeshadow, asymmetric ears, imperfect eyes, unnatural, conjoined, missing limb, missing arm, missing leg, poorly drawn face, poorly drawn feet, poorly drawn hands, floating limb, disconnected limb, extra limb, malformed limbs, malformed hands, poorly rendered face, poor facial details, poorly rendered hands, double face, unbalanced body, unnatural body, lacking body, long body, cripple, old, fat, cartoon, 3D, weird colors, unnatural skin tone, unnatural skin, stiff face, fused hand, skewed eyes, surreal, cropped head",
        category: "Cyberbill"
    },
    {
        name: "博格风格 星际迷航",
        prompt: "{prompt} . ((futurist, biocybernetic borg implants , gray skin, black veins, necrotic skin, black eyes, blacks pipes on body, blacks pipes in the head, black leather helmets with red or green electronic light)), the subject should include advanced mechanical and future systems BREAK green atmosphere",
        translation: "{提示}。（（未来主义者，生物控制机器人植入物，灰色皮肤，黑色静脉，坏死皮肤，黑色眼睛，身体上黑色管道，头部黑色管道，带有红色或绿色电子光的黑色皮革头盔）），主题应包括先进的机械和未来系统",
        negative_prompt: "cropped, out of frame, jpeg artifacts, ugly, duplicate, bad proportions, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, futuristic, poorly framed, cut out, subject out of frame",
        category: "Cyberbill"
    },
    {
        name: "增强 负向",
        prompt: "无",
        translation: "无",
        negative_prompt: "(worst quality, low quality, normal quality, lowres, low details, oversaturated, undersaturated, overexposed, underexposed, grayscale, bw, bad photo, bad photography, bad art:1.4), (watermark, signature, text font, username, error, logo, words, letters, digits, autograph, trademark, name:1.2), (blur, blurry, grainy), morbid, ugly, asymmetrical, mutated malformed, mutilated, poorly lit, bad shadow, draft, cropped, out of frame, cut off, censored, jpeg artifacts, out of focus, glitch, duplicate, (airbrushed, cartoon, anime, semi-realistic, cgi, render, blender, digital art, manga, amateur:1.3), (3D ,3D Game, 3D Game Scene, 3D Character:1.1), (bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3)",
        category: "Fooocus"
    },
    {
        name: "锐利",
        prompt: "cinematic still {prompt} . emotional, harmonious, vignette, 4k epic detailed, shot on kodak, 35mm photo, sharp focus, high budget, cinemascope, moody, epic, gorgeous, film grain, grainy",
        translation: "电影剧照{提示}。情感，和谐，小短片，4k史诗细节，拍摄于柯达，35mm照片，锐利焦点，高预算，电影，喜怒哀乐，史诗，华丽，电影颗粒，颗粒",
        negative_prompt: "anime, cartoon, graphic, (blur, blurry, bokeh), text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured",
        category: "Fooocus"
    },
    {
        name: "杰作",
        prompt: "(masterpiece), (best quality), (ultra-detailed), {prompt}, illustration, disheveled hair, detailed eyes, perfect composition, moist skin, intricate details, earrings, by wlop",
        translation: "（代表作）， （最高质量）， （极度详细的）， {prompt}，插图，凌乱的头发，细致的眼睛，完美的构图，滋润的皮肤，复杂的细节，耳环，by wlop",
        negative_prompt: "longbody, lowres, bad anatomy, bad hands, missing fingers, pubic hair,extra digit, fewer digits, cropped, worst quality, low quality",
        category: "Fooocus"
    },
    {
        name: "照片",
        prompt: "photograph {prompt}, 50mm .   cinematic, 4k epic detailed, 4k epic detailed, photograph shot on kodak, detailed cinematic, hbo dark moody, 35mm photo, grainy, vignette, vintage, Kodachrome, Lomography, stained, highly detailed, found footage",
        translation: "照片{提示}，50mm。电影，4k史诗细节，4k史诗细节，照片拍摄在柯达，详细的电影，hbo黑暗穆迪，35mm照片，颗粒，小短片，复古，柯达，菲林机，染色，高度详细，发现镜头",
        negative_prompt: "Brad Pitt, bokeh, depth of field, blurry, cropped, regular face, saturated, contrast, deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck",
        category: "Fooocus"
    },
    {
        name: "负向词",
        prompt: "无",
        translation: "无",
        negative_prompt: "deformed, bad anatomy, disfigured, poorly drawn face, mutated, extra limb, ugly, poorly drawn hands, missing limb, floating limbs, disconnected limbs, disconnected head, malformed hands, long neck, mutated hands and fingers, bad hands, missing fingers, cropped, worst quality, low quality, mutation, poorly drawn, huge calf, bad hands, fused hand, missing hand, disappearing arms, disappearing thigh, disappearing calf, disappearing legs, missing fingers, fused fingers, abnormal eye proportion, Abnormal hands, abnormal legs, abnormal feet, abnormal fingers, drawing, painting, crayon, sketch, graphite, impressionist, noisy, blurry, soft, deformed, ugly, anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch",
        category: "Fooocus"
    },
    {
        name: "电影",
        prompt: "cinematic still {prompt} . emotional, harmonious, vignette, highly detailed, high budget, bokeh, cinemascope, moody, epic, gorgeous, film grain, grainy",
        translation: "电影剧照{提示}。情感，和谐，小插图，高度详细，高预算，散景，电影，情绪化，史诗，华丽，电影颗粒，颗粒",
        negative_prompt: "anime, cartoon, graphic, text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured",
        category: "Fooocus"
    },
    {
        name: "半真实 负向",
        prompt: "无",
        translation: "无",
        negative_prompt: "(worst quality, low quality, normal quality, lowres, low details, oversaturated, undersaturated, overexposed, underexposed, bad photo, bad photography, bad art:1.4), (watermark, signature, text font, username, error, logo, words, letters, digits, autograph, trademark, name:1.2), (blur, blurry, grainy), morbid, ugly, asymmetrical, mutated malformed, mutilated, poorly lit, bad shadow, draft, cropped, out of frame, cut off, censored, jpeg artifacts, out of focus, glitch, duplicate, (bad hands, bad anatomy, bad body, bad face, bad teeth, bad arms, bad legs, deformities:1.3)",
        category: "Fooocus"
    },
    {
        name: "电影动态",
        prompt: "epic cinematic shot of dynamic {prompt} in motion. main subject of high budget action movie. raw photo, motion blur. best quality, high resolution",
        translation: "史诗电影镜头的动态{提示}在运动。高成本动作电影的主要题材。原始照片，动态模糊。质量最好，分辨率高",
        negative_prompt: "static, still, motionless, sluggish. drawing, painting, illustration, rendered. low budget. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "随手拍",
        prompt: "spontaneous picture of {prompt}, taken by talented amateur. best quality, high resolution. magical moment, natural look. simple but good looking",
        translation: "{提示}的自发图片，由有才华的业余爱好者拍摄。质量最好，分辨率高。神奇的瞬间，自然的样子。简单但好看",
        negative_prompt: "overthinked. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "艺术视觉",
        prompt: "powerful artistic vision of {prompt}. breathtaking masterpiece made by great artist. best quality, high resolution",
        translation: "强大的艺术视野{提示}。伟大艺术家的惊人杰作。质量最好，分辨率高",
        negative_prompt: "insignificant, flawed, made by bad artist. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "黑暗梦境",
        prompt: "dark and unsettling dream showing {prompt}. best quality, high resolution. created by genius but depressed mad artist. grim beauty",
        translation: "黑暗和令人不安的梦显示{提示}。质量最好，分辨率高。由天才但抑郁的疯狂艺术家创作。残酷的美丽",
        negative_prompt: "naive, cheerful. comfortable, casual, boring, cliche. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "阴郁的艺术",
        prompt: "astonishing gloomy art made mainly of shadows and lighting, forming {prompt}. masterful usage of lighting, shadows and chiaroscuro. made by black-hearted artist, drawing from darkness. best quality, high resolution",
        translation: "主要由阴影和光线构成的令人惊讶的阴郁艺术，形成提示。熟练运用光线，阴影和明暗对比。由黑心肠的艺术家从黑暗中作画。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "噩梦",
        prompt: "picture from really bad dream about terrifying {prompt}, true horror. bone-chilling vision. mad world that shouldn't exist. best quality, high resolution",
        translation: "图片来自可怕的噩梦，真正的恐怖。刺骨的愿景。不应该存在的疯狂世界。质量最好，分辨率高",
        negative_prompt: "nice dream, pleasant experience. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "地下艺术",
        prompt: "uncanny caliginous vision of {prompt}, created by remarkable underground artist. best quality, high resolution. raw and brutal art, careless but impressive style. inspired by darkness and chaos",
        translation: "神秘的无情的视觉{prompt}，由杰出的地下艺术家创造。质量最好，分辨率高。原始和野蛮的艺术，粗心但令人印象深刻的风格。灵感来自黑暗和混乱",
        negative_prompt: "photography, mainstream, civilized. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "超现实主义",
        prompt: "surreal painting representing strange vision of {prompt}. harmonious madness, synergy with chance. unique artstyle, mindbending art, magical surrealism. best quality, high resolution",
        translation: "超现实主义绘画，代表{提示}的奇异景象。和谐的疯狂，与机遇的协同。独特的艺术风格，令人费解的艺术，神奇的超现实主义。质量最好，分辨率高",
        negative_prompt: "photography, illustration, drawing. realistic, possible. logical, sane. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "动态插画",
        prompt: "insanely dynamic illustration of {prompt}. best quality, high resolution. crazy artstyle, careless brushstrokes, emotional and fun",
        translation: "{prompt}的疯狂动态插图。质量最好，分辨率高。疯狂的画风，漫不经心的笔触，感性又有趣",
        negative_prompt: "photography, realistic. static, still, slow, boring. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "不死艺术",
        prompt: "long forgotten art created by undead artist illustrating {prompt}, tribute to the death and decay. miserable art of the damned. wretched and decaying world. best quality, high resolution",
        translation: "由不死艺术家创作的被遗忘已久的艺术，说明{提示}，致敬死亡和腐烂。被诅咒者的悲惨艺术。可怜而腐朽的世界。质量最好，分辨率高",
        negative_prompt: "alive, playful, living. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "瞬时艺术",
        prompt: "art illustrating insane amounts of raging elemental energy turning into {prompt}, avatar of elements. magical surrealism, wizardry. best quality, high resolution",
        translation: "艺术说明疯狂的狂暴的元素能量转变成{提示}，元素的化身。魔幻超现实主义，巫术。质量最好，分辨率高",
        negative_prompt: "photography, realistic, real. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "太空艺术",
        prompt: "winner of inter-galactic art contest illustrating {prompt}, symbol of the interstellar singularity. best quality, high resolution. artstyle previously unseen in the whole galaxy",
        translation: "星系间艺术竞赛获胜者，说明{提示}，星际奇点的象征。质量最好，分辨率高。在整个星系中前所未见的艺术风格",
        negative_prompt: "created by human race, low quality, low resolution",
        category: "MRE"
    },
    {
        name: "古代插图",
        prompt: "sublime ancient illustration of {prompt}, predating human civilization. crude and simple, but also surprisingly beautiful artwork, made by genius primeval artist. best quality, high resolution",
        translation: "{prompt}的崇高古代插图，早于人类文明。粗糙和简单，但也是惊人的美丽的艺术品，由天才的原始艺术家。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "勇敢的艺术",
        prompt: "brave, shocking, and brutally true art showing {prompt}. inspired by courage and unlimited creativity. truth found in chaos. best quality, high resolution",
        translation: "勇敢的，令人震惊的，残酷的真实艺术显示{提示}。受到勇气和无限创造力的鼓舞。在混乱中发现真理。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "英雄幻想",
        prompt: "heroic fantasy painting of {prompt}, in the dangerous fantasy world. airbrush over oil on canvas. best quality, high resolution",
        translation: "英雄的幻想画{提示}，在危险的幻想世界。喷枪在画布上的油。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "黑暗赛博朋克",
        prompt: "dark cyberpunk illustration of brutal {prompt} in a world without hope, ruled by ruthless criminal corporations. best quality, high resolution",
        translation: "黑暗赛博朋克的残酷{提示}在一个没有希望的世界，由无情的犯罪公司统治。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "抒情几何",
        prompt: "geometric and lyrical abstraction painting presenting {prompt}. oil on metal. best quality, high resolution",
        translation: "几何和抒情抽象绘画呈现{提示}。金属上的油。质量最好，分辨率高",
        negative_prompt: "photography, realistic, drawing, rendered. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "水墨画写意",
        prompt: "big long brushstrokes of deep black sumi-e turning into symbolic painting of {prompt}. master level raw art. best quality, high resolution",
        translation: "深邃的黑色sumi-e的大长笔触变成了{prompt}的象征性绘画。大师级的原始艺术。质量最好，分辨率高",
        negative_prompt: "photography, rendered. low quality, low resolution",
        category: "MRE"
    },
    {
        name: "水墨画写实",
        prompt: "highly detailed black sumi-e painting of {prompt}. in-depth study of perfection, created by a master. best quality, high resolution",
        translation: "非常详细的黑色sumi-e绘画{prompt}。深入学习，精益求精，由大师创造。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "日漫",
        prompt: "manga artwork presenting {prompt}. created by japanese manga artist. highly emotional. best quality, high resolution",
        translation: "漫画作品呈现{提示}。由日本漫画家创作。高度情绪化的。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "动漫",
        prompt: "anime artwork illustrating {prompt}. created by japanese anime studio. highly emotional. best quality, high resolution",
        translation: "动画作品说明{提示}。由日本动画工作室创作。高度情绪化的。质量最好，分辨率高",
        negative_prompt: "low quality, low resolution",
        category: "MRE"
    },
    {
        name: "漫画",
        prompt: "breathtaking illustration from adult comic book presenting {prompt}. fabulous artwork. best quality, high resolution",
        translation: "令人惊叹的插图从成人漫画书呈现{提示}。令人难以置信的作品。质量最好，分辨率高",
        negative_prompt: "deformed, ugly, low quality, low resolution",
        category: "MRE"
    },
    {
        name: "彩色平版印刷",
        prompt: "Chromolithograph {prompt}. Vibrant colors, intricate details, rich color saturation, meticulous registration, multi-layered printing, decorative elements, historical charm, artistic reproductions, commercial posters, nostalgic, ornate compositions.",
        translation: "彩色平版印刷{提示}。鲜艳的色彩，复杂的细节，丰富的色彩饱和度，细致的配准，多层印刷，装饰元素，历史魅力，艺术复制，商业海报，怀旧，华丽的构图。",
        negative_prompt: "monochromatic, simple designs, limited color palette, imprecise registration, minimalistic, modern aesthetic, digital appearance.",
        category: "MK"
    },
    {
        name: "交叉加工打印",
        prompt: "Cross processing print {prompt}. Experimental color shifts, unconventional tonalities, vibrant and surreal hues, heightened contrasts, unpredictable results, artistic unpredictability, retro and vintage feel, dynamic color interplay, abstract and dreamlike.",
        translation: "交叉处理打印{提示}。实验性的色彩变化，非传统的色调，充满活力和超现实的色调，强烈的对比，不可预测的结果，艺术的不可预测性，复古和复古的感觉，动态的色彩相互作用，抽象和梦幻般的。",
        negative_prompt: "predictable color tones, traditional processing, realistic color representation, subdued contrasts, standard photographic aesthetics.",
        category: "MK"
    },
    {
        name: "杜菲彩色照片",
        prompt: "Dufaycolor photograph {prompt}. Vintage color palette, distinctive color rendering, soft and dreamy atmosphere, historical charm, unique color process, grainy texture, evocative mood, nostalgic aesthetic, hand-tinted appearance, artistic patina.",
        translation: "杜菲彩色照片{提示}。复古调色，显色鲜明，柔和梦幻氛围，历史韵味，独特的色彩处理，颗粒质感，唤起心情，怀旧美学，手工上色外观，艺术铜绿。",
        negative_prompt: "modern color reproduction, hyperrealistic tones, sharp and clear details, digital precision, contemporary aesthetic.",
        category: "MK"
    },
    {
        name: "植物标本",
        prompt: "Herbarium drawing{prompt}. Botanical accuracy, old botanical book illustration, detailed illustrations, pressed plants, delicate and precise linework, scientific documentation, meticulous presentation, educational purpose, organic compositions, timeless aesthetic, naturalistic beauty.",
        translation: "植物标本画{提示}。植物的准确性，古老的植物书插图，详细的插图，压制植物，精致精确的线条，科学文献，细致的呈现，教育目的，有机组成，永恒的美学，自然之美。",
        negative_prompt: "abstract representation, vibrant colors, artistic interpretation, chaotic compositions, fantastical elements, digital appearance.",
        category: "MK"
    },
    {
        name: "朋克拼贴",
        prompt: "punk collage style {prompt} . mixed media, papercut,textured paper, overlapping, ripped posters, safety pins, chaotic layers, graffiti-style elements, anarchy symbols, vintage photos, cut-and-paste aesthetic, bold typography, distorted images, political messages, urban decay, distressed textures, newspaper clippings, spray paint, rebellious icons, DIY spirit, vivid colors, punk band logos, edgy and raw compositions,",
        translation: "朋克拼贴风格{提示}。混合媒体、剪纸、有纹理的纸、重叠、撕裂的海报、安全别针、混乱的层、涂鸦风格的元素、无政府主义的符号、复古照片、剪切粘贴美学、大胆的排版、扭曲的图像、政治信息、城市衰败、痛苦的纹理、剪报、喷漆、叛逆的图标、DIY精神、生动的颜色、朋克乐队的标志、前卫和原始的构图、",
        negative_prompt: "conventional,blurry, noisy, low contrast",
        category: "MK"
    },
    {
        name: "马赛克",
        prompt: "mosaic style {prompt} . fragmented, assembled, colorful, highly detailed",
        translation: "马赛克风格{提示}。碎片化的、组合的、丰富多彩的、非常详细的",
        negative_prompt: "whole, unbroken, monochrome",
        category: "MK"
    },
    {
        name: "梵高",
        prompt: "Oil painting by Van Gogh {prompt} . Expressive, impasto, swirling brushwork, vibrant, brush strokes, Brushstroke-heavy, Textured, Impasto, Colorful, Dynamic, Bold, Distinctive, Vibrant, Whirling, Expressive, Dramatic, Swirling, Layered, Intense, Contrastive, Atmospheric, Luminous, Textural, Evocative, SpiraledVan Gogh style",
        translation: "梵高油画{提示}。富有表现力的，厚涂的颜料，旋转的笔触，充满活力，笔触，笔触重，纹理，厚涂的颜料，色彩丰富，动态，大胆，独特，充满活力，旋转，富有表现力，戏剧性，旋转，分层，强烈，对比，大气，发光，纹理，唤起，螺旋梵高风格",
        negative_prompt: "realistic, photorealistic, calm, straight lines, signature, frame, text, watermark",
        category: "MK"
    },
    {
        name: "涂色书",
        prompt: "centered black and white high contrast line drawing, coloring book style,{prompt} . monochrome, blank white background",
        translation: "居中黑白高对比度线条绘制，着色书风格，{提示}。单色，空白的白色背景",
        negative_prompt: "greyscale, gradients,shadows,shadow, colored, Red, Blue, Yellow, Green, Orange, Purple, Pink, Brown, Gray, Beige, Turquoise, Lavender, Cyan, Magenta, Olive, Indigo, black background",
        category: "MK"
    },
    {
        name: "萨金特水彩画",
        prompt: "Oil painting by John Singer Sargent {prompt}. Elegant, refined, masterful technique,realistic portrayal, subtle play of light, captivating expression, rich details, harmonious colors, skillful composition, brush strokes, chiaroscuro.",
        translation: "约翰·辛格·萨金特油画{提示}。优雅，精致，技巧娴熟，刻画逼真，光线发挥微妙，表情迷人，细节丰富，色彩和谐，构图巧妙，笔触，明暗对比。",
        negative_prompt: "realistic, photorealistic, abstract, overly stylized, excessive contrasts, distorted,bright colors,disorder.",
        category: "MK"
    },
    {
        name: "波洛克 抽象画",
        prompt: "Oil painting by Jackson Pollock {prompt}. Abstract expressionism, drip painting, chaotic composition, energetic, spontaneous, unconventional technique, dynamic, bold, distinctive, vibrant, intense, expressive, energetic, layered, non-representational, gestural.",
        translation: "杰克逊·波洛克油画{提示}。抽象表现主义，滴画，混乱的构图，充满活力的，自发的，非常规的技术，动态的，大胆的，独特的，充满活力的，强烈的，富有表现力的，充满活力的，分层的，非代表性的，手势的。",
        negative_prompt: "(realistic:1.5), (photorealistic:1.5), representational, calm, ordered composition, precise lines, detailed forms, subdued colors, quiet, static, traditional, figurative.",
        category: "MK"
    },
    {
        name: "巴斯奎特 涂鸦艺术",
        prompt: "Artwork by Jean-Michel Basquiat {prompt}. Neo-expressionism, street art influence, graffiti-inspired, raw, energetic, bold colors, dynamic composition, chaotic, layered, textural, expressive, spontaneous, distinctive, symbolic,energetic brushstrokes.",
        translation: "艺术品由让-米歇尔·巴斯奎特{提示}。新表现主义，街头艺术的影响，涂鸦灵感，原始，充满活力，大胆的色彩，动态构图，混乱，分层，纹理，表现力，自发，独特，象征性，充满活力的笔触。",
        negative_prompt: "(realistic:1.5), (photorealistic:1.5), calm, precise lines, conventional composition, subdued",
        category: "MK"
    },
    {
        name: "安迪沃霍尔 波普艺术",
        prompt: "Artwork in the style of Andy Warhol {prompt}. Pop art, vibrant colors, bold compositions, repetition of iconic imagery, celebrity culture, commercial aesthetics, mass production influence, stylized simplicity, cultural commentary, graphical elements, distinctive portraits.",
        translation: "安迪·沃霍尔风格的艺术品。波普艺术，鲜艳的色彩，大胆的构图，标志性形象的重复，名人文化，商业美学，批量生产的影响，风格化的简约，文化评论，图形元素，独特的肖像。",
        negative_prompt: "subdued colors, realistic, lack of repetition, minimalistic.",
        category: "MK"
    },
    {
        name: "半色调印刷",
        prompt: "Halftone print of {prompt}. Dot matrix pattern, grayscale tones, vintage aesthetic, newspaper print vibe, stylized dots, visual texture, black and white contrasts, retro appearance, artistic pointillism,pop culture, (Roy Lichtenstein style:1.5).",
        translation: "{prompt}的半色调打印。点阵图案，灰度色调，复古美学，报纸印刷氛围，风格化的点，视觉纹理，黑白对比，复古外观，艺术点彩画，流行文化，（罗伊·利希滕斯坦风格：1.5）。",
        negative_prompt: "smooth gradients, continuous tones, vibrant colors.",
        category: "MK"
    },
    {
        name: "平面绘画",
        prompt: "Gond painting {prompt}. Intricate patterns, vibrant colors, detailed motifs, nature-inspired themes, tribal folklore, fine lines, intricate detailing, storytelling compositions, mystical and folkloric, cultural richness.",
        translation: "上帝的绘画{提示}。复杂的图案，鲜艳的色彩，详细的图案，自然灵感的主题，部落民间传说，精细的线条，复杂的细节，讲故事的构图，神秘和民俗，文化丰富。",
        negative_prompt: "monochromatic, abstract shapes, minimalistic.",
        category: "MK"
    },
    {
        name: "蛋白印相",
        prompt: "Albumen print {prompt}. Sepia tones, fine details, subtle tonal gradations, delicate highlights, vintage aesthetic, soft and muted atmosphere, historical charm, rich textures, meticulous craftsmanship, classic photographic technique, vignetting.",
        translation: "蛋白打印{提示}。深褐色色调，细节细腻，色调渐变微妙，高光细腻，复古美学，柔和柔和的氛围，历史韵味，丰富的质感，细致的工艺，经典的摄影手法，渐晕。",
        negative_prompt: "vibrant colors, high contrast, modern, digital appearance, sharp details, contemporary style.",
        category: "MK"
    },
    {
        name: "铜版画打印",
        prompt: "Aquatint print {prompt}. Soft tonal gradations, atmospheric effects, velvety textures, rich contrasts, fine details, etching process, delicate lines, nuanced shading, expressive and moody atmosphere, artistic depth.",
        translation: "铜版画打印{提示}。柔和的色调渐变，大气效果，天鹅绒般的纹理，丰富的对比，精细的细节，蚀刻工艺，细腻的线条，细致的阴影，表现力和喜怒哀乐的气氛，艺术深度。",
        negative_prompt: "sharp contrasts, bold lines, minimalistic.",
        category: "MK"
    },
    {
        name: "网络花汁印相",
        prompt: "Anthotype print {prompt}. Monochrome dye, soft and muted colors, organic textures, ephemeral and delicate appearance, low details, watercolor canvas, low contrast, overexposed, silhouette, textured paper.",
        translation: "网络花汁印相{prompt}。单色染料，柔和柔和的颜色，有机纹理，短暂而精致的外观，低细节，水彩帆布，低对比度，过度曝光，轮廓，纹理纸。",
        negative_prompt: "vibrant synthetic dyes, bold and saturated colors.",
        category: "MK"
    },
    {
        name: "因纽特人雕刻",
        prompt: "A sculpture made of ivory, {prompt} made of . Sculptures, Inuit art style, intricate carvings, natural materials, storytelling motifs, arctic wildlife themes, symbolic representations, cultural traditions, earthy tones, harmonious compositions, spiritual and mythological elements.",
        translation: "象牙雕塑用象牙制成的雕塑，由。雕塑，因纽特艺术风格，复杂的雕刻，自然材料，讲故事的主题，北极野生动物主题，象征性的表现，文化传统，泥土色调，和谐的构图，精神和神话元素。",
        negative_prompt: "abstract, vibrant colors.",
        category: "MK"
    },
    {
        name: "溴釉印相法",
        prompt: "Bromoil print {prompt}. Painterly effects, sepia tones, textured surfaces, rich contrasts, expressive brushwork, tonal variations, vintage aesthetic, atmospheric mood, handmade quality, artistic experimentation, darkroom craftsmanship, vignetting.",
        translation: "溴打印{提示}。绘画效果，棕褐色色调，纹理表面，丰富的对比，富有表现力的笔触，色调变化，复古美学，大气情绪，手工品质，艺术实验，暗室工艺，渐晕。",
        negative_prompt: "smooth surfaces, minimal brushwork, contemporary digital appearance.",
        category: "MK"
    },
    {
        name: "碘化银纸照相法印",
        prompt: "Calotype print {prompt}. Soft focus, subtle tonal range, paper negative process, fine details, vintage aesthetic, artistic experimentation, atmospheric mood, early photographic charm, handmade quality, vignetting.",
        translation: "Calotype打印{提示}。软焦点，微妙的色调范围，纸负片工艺，精细的细节，复古美学，艺术实验，大气的情绪，早期的摄影魅力，手工品质，渐晕。",
        negative_prompt: "sharp focus, bold contrasts, modern aesthetic, digital photography.",
        category: "MK"
    },
    {
        name: "彩色速写笔记风格",
        prompt: "Color sketchnote {prompt}. Hand-drawn elements, vibrant colors, visual hierarchy, playful illustrations, varied typography, graphic icons, organic and dynamic layout, personalized touches, creative expression, engaging storytelling.",
        translation: "彩色素描笔记{提示}。手绘元素，鲜艳的色彩，视觉层次，有趣的插图，各种排版，图形图标，有机和动态布局，个性化的触摸，创造性的表达，引人入胜的故事。",
        negative_prompt: "monochromatic, geometric layout.",
        category: "MK"
    },
    {
        name: "陶瓷彩绘",
        prompt: "A sculpture made of blue pattern porcelain of {prompt}. Classic design, blue and white color scheme, intricate detailing, floral motifs, onion-shaped elements, historical charm, rococo, white ware, cobalt blue, underglaze pattern, fine craftsmanship, traditional elegance, delicate patterns, vintage aesthetic, Meissen, Blue Onion pattern, Cibulak.",
        translation: "一种由{prompt}的蓝色花纹瓷器制成的雕塑。经典设计，蓝白配色，复杂细节，花卉图案，洋葱形元素，历史魅力，洛可可，白器，钴蓝，釉下图案，精细工艺，传统优雅，精致图案，复古美学，Meissen，蓝洋葱图案，Cibulak。",
        negative_prompt: "tea, teapot, cup, teacup,bright colors, bold and modern design, absence of intricate detailing, lack of floral motifs, non-traditional shapes.",
        category: "MK"
    },
    {
        name: "酒精水墨艺术",
        prompt: "Alcohol ink art {prompt}. Fluid and vibrant colors, unpredictable patterns, organic textures, translucent layers, abstract compositions, ethereal and dreamy effects, free-flowing movement, expressive brushstrokes, contemporary aesthetic, wet textured paper.",
        translation: "酒精水墨艺术{提示}。流畅而充满活力的色彩，不可预测的图案，有机的纹理，半透明的层次，抽象的构图，空灵而梦幻的效果，自由流动的运动，富有表现力的笔触，当代美学，湿纹理纸。",
        negative_prompt: "monochromatic, controlled patterns.",
        category: "MK"
    },
    {
        name: "一笔画",
        prompt: "One line art {prompt}. Continuous and unbroken black line, minimalistic, simplicity, economical use of space, flowing and dynamic, symbolic representations, contemporary aesthetic, evocative and abstract, white background.",
        translation: "一行art {prompt}。连续而不间断的黑色线条，极简、简洁，节约空间，流动而动态，象征性的表现，当代美学，唤起和抽象，白色背景。",
        negative_prompt: "disjointed lines, complexity, complex detailing.",
        category: "MK"
    },
    {
        name: "夜光漆",
        prompt: "Blacklight paint {prompt}. Fluorescent pigments, vibrant and surreal colors, ethereal glow, otherworldly effects, dynamic and psychedelic compositions, neon aesthetics, transformative in ultraviolet light, contemporary and experimental.",
        translation: "黑光漆{提示}。荧光颜料，充满活力和超现实的色彩，空灵的光芒，超凡脱俗的效果，动态和迷幻的构图，霓虹美学，在紫外线下的变化，当代和实验。",
        negative_prompt: "muted colors, traditional and realistic compositions.",
        category: "MK"
    },
    {
        name: "嘉年华玻璃",
        prompt: "A sculpture made of Carnival glass, {prompt}. Iridescent surfaces, vibrant colors, intricate patterns, opalescent hues, reflective and prismatic effects, Art Nouveau and Art Deco influences, vintage charm, intricate detailing, lustrous and luminous appearance, Carnival Glass style.",
        translation: "由嘉年华玻璃制成的雕塑，{提示}。虹彩表面，鲜艳的颜色，复杂的图案，乳白色的色调，反射和棱镜效果，新艺术和装饰艺术的影响，复古的魅力，复杂的细节，光泽和发光的外观，嘉年华玻璃风格。",
        negative_prompt: "non-iridescent surfaces, muted colors, absence of intricate patterns, lack of opalescent hues, modern and minimalist aesthetic.",
        category: "MK"
    },
    {
        name: "蓝图晒印",
        prompt: "Cyanotype print {prompt}. Prussian blue tones, distinctive coloration, high contrast, blueprint aesthetics, atmospheric mood, sun-exposed paper, silhouette effects, delicate details, historical charm, handmade and experimental quality.",
        translation: "青版打印{提示}。普鲁士蓝调，色彩鲜明，对比度高，蓝图美学，大气情调，晒纸，剪影效果，细节精致，历史韵味，手工和实验品质。",
        negative_prompt: "vibrant colors, low contrast, modern and polished appearance.",
        category: "MK"
    },
    {
        name: "十字绣",
        prompt: "Cross-stitching {prompt}. Intricate patterns, embroidery thread, sewing, fine details, precise stitches, textile artistry, symmetrical designs, varied color palette, traditional and contemporary motifs, handmade and crafted,canvas, nostalgic charm.",
        translation: "十字绣}{提示。复杂的图案，刺绣线，缝纫，精细的细节，精确的针脚，纺织艺术，对称的设计，多样的调色板，传统和现代的图案，手工和精心制作，帆布，怀旧的魅力。",
        negative_prompt: "paper, paint, ink, photography.",
        category: "MK"
    },
    {
        name: "蜡画漆",
        prompt: "Encaustic paint {prompt}. Textured surfaces, translucent layers, luminous quality, wax medium, rich color saturation, fluid and organic shapes, contemporary and historical influences, mixed media elements, atmospheric depth.",
        translation: "彩绘{提示}。纹理表面，半透明层，发光质量，蜡介质，丰富的色彩饱和度，流体和有机的形状，当代和历史的影响，混合媒体元素，大气深度。",
        negative_prompt: "flat surfaces, opaque layers, lack of wax medium, muted color palette, absence of textured surfaces, non-mixed media.",
        category: "MK"
    },
    {
        name: "刺绣",
        prompt: "Embroidery {prompt}. Intricate stitching, embroidery thread, fine details, varied thread textures, textile artistry, embellished surfaces, diverse color palette, traditional and contemporary motifs, handmade and crafted, tactile and ornate.",
        translation: "刺绣{提示}。复杂的缝合，刺绣线，精细的细节，不同的线纹理，纺织艺术，装饰表面，多样的调色板，传统和现代的图案，手工和精心制作，触觉和华丽。",
        negative_prompt: "minimalist, monochromatic.",
        category: "MK"
    },
    {
        name: "鱼拓",
        prompt: "Gyotaku {prompt}. Fish impressions, realistic details, ink rubbings, textured surfaces, traditional Japanese art form, nature-inspired compositions, artistic representation of marine life, black and white contrasts, cultural significance.",
        translation: "Gyotaku{提示}。鱼的印象，逼真的细节，水墨拓片，纹理表面，日本传统艺术形式，自然灵感的构图，海洋生物的艺术表现，黑白对比，文化意义。",
        negative_prompt: "photography.",
        category: "MK"
    },
    {
        name: "光谱艺术",
        prompt: "Luminogram {prompt}. Photogram technique, ethereal and abstract effects, light and shadow interplay, luminous quality, experimental process, direct light exposure, unique and unpredictable results, artistic experimentation.",
        translation: "Luminogram{提示}。摄影技术，空灵与抽象的效果，光影的相互作用，发光质量，实验过程，直射光曝光，独特而不可预测的结果，艺术实验。",
        negative_prompt: "无",
        category: "MK"
    },
    {
        name: "电子屏画板艺术",
        prompt: "Lite Brite art {prompt}. Luminous and colorful designs, pixelated compositions, retro aesthetic, glowing effects, creative patterns, interactive and playful, nostalgic charm, vibrant and dynamic arrangements.",
        translation: "幻彩灯箱艺术{提示}。明亮多彩的设计，像素化的构图，复古的美学，发光的效果，创意的图案，互动和俏皮，怀旧的魅力，充满活力和动态的安排。",
        negative_prompt: "onomochromatic.",
        category: "MK"
    },
    {
        name: "木纹金属",
        prompt: "Mokume-gane {prompt}. Wood-grain patterns, mixed metal layers, intricate and organic designs, traditional Japanese metalwork, harmonious color combinations, artisanal craftsmanship, unique and layered textures, cultural and historical significance.",
        translation: "木纹金属{提示}。木纹图案，混合金属层，复杂而有机的设计，传统的日本金属制品，和谐的色彩组合，手工工艺，独特而分层的纹理，文化和历史意义。",
        negative_prompt: "uniform metal surfaces.",
        category: "MK"
    },
    {
        name: "鹅卵石艺术",
        prompt: "a sculpture made of peebles, {prompt}. Pebble art style,natural materials, textured surfaces, balanced compositions, organic forms, harmonious arrangements, tactile and 3D effects, beach-inspired aesthetic, creative storytelling, artisanal craftsmanship.",
        translation: "石雕：由卵石制成的雕塑鹅卵石艺术风格，天然材料，纹理表面，平衡的构图，有机的形式，和谐的安排，触觉和3D效果，海滩启发的美学，创造性的故事，手工工艺。",
        negative_prompt: "non-natural materials, lack of textured surfaces, imbalanced compositions, absence of organic forms, non-tactile appearance.",
        category: "MK"
    },
    {
        name: "漆画",
        prompt: "Palekh art {prompt}. Miniature paintings, intricate details, vivid colors, folkloric themes, lacquer finish, storytelling compositions, symbolic elements, Russian folklore influence, cultural and historical significance.",
        translation: "漆画艺术{提示}。微型绘画，复杂的细节，生动的色彩，民俗主题，漆面，讲故事的构图，象征元素，俄罗斯民俗影响，文化和历史意义。",
        negative_prompt: "large-scale paintings.",
        category: "MK"
    },
    {
        name: "墨流工艺",
        prompt: "Suminagashi {prompt}. Floating ink patterns, marbled effects, delicate and ethereal designs, water-based ink, fluid and unpredictable compositions, meditative process, monochromatic or subtle color palette, Japanese artistic tradition.",
        translation: "墨流工艺{提示}。浮墨图案，大理石效果，精致空灵的设计，水基墨水，流动和不可预测的组成，冥想的过程，单色或微妙的调色板，日本艺术传统。",
        negative_prompt: "vibrant and bold color palette.",
        category: "MK"
    },
    {
        name: "骨饰 贝雕",
        prompt: "A Scrimshaw engraving of {prompt}. Intricate engravings on a spermwhale's teeth, marine motifs, detailed scenes, nautical themes, black and white contrasts, historical craftsmanship, artisanal carving, storytelling compositions, maritime heritage.",
        translation: "斯克林肖雕刻的{prompt}。抹香鲸牙齿上的复杂雕刻，海洋图案，详细的场景，航海主题，黑白对比，历史工艺，手工雕刻，讲故事的作品，海洋遗产。",
        negative_prompt: "colorful, modern.",
        category: "MK"
    },
    {
        name: "日本绞染",
        prompt: "Shibori {prompt}. Textured fabric, intricate patterns, resist-dyeing technique, indigo or vibrant colors, organic and flowing designs, Japanese textile art, cultural tradition, tactile and visual interest.",
        translation: "绞染{提示}。有质感的面料，复杂的图案，抗染技术，靛蓝或鲜艳的颜色，有机和流动的设计，日本纺织艺术，文化传统，触觉和视觉的兴趣。",
        negative_prompt: "monochromatic.",
        category: "MK"
    },
    {
        name: "琉璃釉",
        prompt: "A sculpture made of Vitreous enamel {prompt}. Smooth and glossy surfaces, vibrant colors, glass-like finish, durable and resilient, intricate detailing, traditional and contemporary applications, artistic craftsmanship, jewelry and decorative objects, , Vitreous enamel, colored glass.",
        translation: "用玻璃搪瓷制成的雕塑光滑和有光泽的表面，鲜艳的颜色，玻璃般的光洁度，耐用和弹性，复杂的细节，传统和现代的应用，艺术工艺，珠宝和装饰品，玻璃搪瓷，彩色玻璃。",
        negative_prompt: "rough surfaces, muted colors.",
        category: "MK"
    },
    {
        name: "浮世绘",
        prompt: "Ukiyo-e {prompt}. Woodblock prints, vibrant colors, intricate details, depictions of landscapes, kabuki actors, beautiful women, cultural scenes, traditional Japanese art, artistic craftsmanship, historical significance.",
        translation: "浮世绘{提示})。木刻版画，鲜艳的色彩，复杂的细节，描绘风景，歌舞伎演员，美女，文化场景，日本传统艺术，艺术工艺，历史意义。",
        negative_prompt: "absence of woodblock prints, muted colors, lack of intricate details, non-traditional Japanese themes, absence of cultural scenes.",
        category: "MK"
    },
    {
        name: "复古航空公司海报",
        prompt: "vintage airline poster {prompt} . classic aviation fonts, pastel colors, elegant aircraft illustrations, scenic destinations, distressed textures, retro travel allure",
        translation: "复古航空公司海报{提示}。经典的航空字体，柔和的色彩，优雅的飞机插图，风景优美的目的地，心疼的纹理，复古的旅行诱惑",
        negative_prompt: "modern fonts, bold colors, hyper-realistic, sleek design",
        category: "MK"
    },
    {
        name: "复古旅游海报",
        prompt: "vintage travel poster {prompt} . retro fonts, muted colors, scenic illustrations, iconic landmarks, distressed textures, nostalgic vibes",
        translation: "复古旅游海报{提示}。复古的字体，柔和的颜色，风景插图，标志性的地标，心疼的纹理，怀旧的共鸣",
        negative_prompt: "modern fonts, vibrant colors, hyper-realistic, sleek design",
        category: "MK"
    },
    {
        name: "包豪斯风格",
        prompt: "Bauhaus-inspired {prompt} . minimalism, geometric precision, primary colors, sans-serif typography, asymmetry, functional design",
        translation: "包豪斯启发的{提示}。极简主义，几何精度，原色，无衬线排版，不对称，功能设计",
        negative_prompt: "ornate, intricate, excessive detail, complex patterns, serif typography",
        category: "MK"
    },
    {
        name: "非洲未来主义",
        prompt: "Afrofuturism illustration {prompt} . vibrant colors, futuristic elements, cultural symbolism, cosmic imagery, dynamic patterns, empowering narratives",
        translation: "非洲未来主义插图{提示}。鲜艳的色彩，未来主义元素，文化象征主义，宇宙意象，动态模式，赋权叙事",
        negative_prompt: "monochromatic",
        category: "MK"
    },
    {
        name: "原子朋克",
        prompt: "Atompunk illustation, {prompt} . retro-futuristic, atomic age aesthetics, sleek lines, metallic textures, futuristic technology, optimism, energy",
        translation: "原子朋克插图，{提示}。复古未来主义，原子时代美学，圆滑的线条，金属质感，未来科技，乐观主义，能量",
        negative_prompt: "organic, natural textures, rustic, dystopian",
        category: "MK"
    },
    {
        name: "构成主义",
        prompt: "Constructivism {prompt} . geometric abstraction, bold colors, industrial aesthetics, dynamic compositions, utilitarian design, revolutionary spirit",
        translation: "建构主义{提示}。几何抽象，大胆的色彩，工业美学，动感的构图，实用的设计，革命的精神",
        negative_prompt: "organic shapes, muted colors, ornate elements, traditional",
        category: "MK"
    },
    {
        name: "墨西哥艺术",
        prompt: "Chicano art {prompt} . bold colors, cultural symbolism, muralism, lowrider aesthetics, barrio life, political messages, social activism, Mexico",
        translation: "墨西哥人艺术{提示}。大胆的色彩，文化象征主义，壁画，下层居民美学，贫民区生活，政治信息，社会行动主义，墨西哥",
        negative_prompt: "monochromatic, minimalist, mainstream aesthetics",
        category: "MK"
    },
    {
        name: "风格派",
        prompt: "De Stijl Art {prompt} . neoplasticism, primary colors, geometric abstraction, horizontal and vertical lines, simplicity, harmony, utopian ideals",
        translation: "风格派 {prompt}。新造型主义，原色，几何抽象，水平和垂直的线条，简单，和谐，乌托邦理想",
        negative_prompt: "complex patterns, muted colors, ornate elements, asymmetry",
        category: "MK"
    },
    {
        name: "迪雅克面具艺术",
        prompt: "Dayak art sculpture of {prompt} . intricate patterns, nature-inspired motifs, vibrant colors, traditional craftsmanship, cultural symbolism, storytelling",
        translation: "达雅克艺术雕塑{提示}。复杂的图案，自然灵感的图案，鲜艳的色彩，传统工艺，文化象征，讲故事",
        negative_prompt: "minimalist, monochromatic, modern",
        category: "MK"
    },
    {
        name: "法尤姆肖像画",
        prompt: "Fayum portrait {prompt} . encaustic painting, realistic facial features, warm earth tones, serene expressions, ancient Egyptian influences",
        translation: "法尤姆画像{提示}。彩绘，写实的面部特征，温暖的大地色调，宁静的表情，古埃及的影响",
        negative_prompt: "abstract, vibrant colors, exaggerated features, modern",
        category: "MK"
    },
    {
        name: "彩饰手抄本",
        prompt: "Illuminated manuscript {prompt} . intricate calligraphy, rich colors, detailed illustrations, gold leaf accents, ornate borders, religious, historical, medieval",
        translation: "彩绘手稿{提示}。错综复杂的书法，丰富的色彩，详细的插图，金箔口音，华丽的边界，宗教，历史，中世纪",
        negative_prompt: "modern typography, minimalist design, monochromatic, abstract themes",
        category: "MK"
    },
    {
        name: "卡利加特绘画",
        prompt: "Kalighat painting {prompt} . bold lines, vibrant colors, narrative storytelling, cultural motifs, flat compositions, expressive characters",
        translation: "卡利加特绘画{提示}。大胆的线条，鲜艳的色彩，叙事，文化主题，平面构图，富有表现力的人物",
        negative_prompt: "subdued colors, intricate details, realistic portrayal, modern aesthetics",
        category: "MK"
    },
    {
        name: "米德巴泥绘画",
        prompt: "Madhubani painting {prompt} . intricate patterns, vibrant colors, nature-inspired motifs, cultural storytelling, symmetry, folk art aesthetics",
        translation: "米德巴泥绘画{提示}。复杂的图案，鲜艳的色彩，自然灵感的图案，文化故事，对称，民间艺术美学",
        negative_prompt: "abstract, muted colors, minimalistic design, modern aesthetics",
        category: "MK"
    },
    {
        name: "画意摄影",
        prompt: "Pictorialism illustration{prompt} . soft focus, atmospheric effects, artistic interpretation, tonality, muted colors, evocative storytelling",
        translation: "画意摄影{提示}。柔和的焦点，大气的效果，艺术的诠释，调性，柔和的色彩，令人回味的故事",
        negative_prompt: "sharp focus, high contrast, realistic depiction, vivid colors",
        category: "MK"
    },
    {
        name: "皮彻瓦伊绘画",
        prompt: "Pichwai painting {prompt} . intricate detailing, vibrant colors, religious themes, nature motifs, devotional storytelling, gold leaf accents",
        translation: "皮彻瓦伊绘画{提示}。错综复杂的细节，鲜艳的色彩，宗教主题，自然图案，虔诚的故事，金箔口音",
        negative_prompt: "minimalist, subdued colors, abstract design",
        category: "MK"
    },
    {
        name: "奥里萨邦帕达契特拉绘画",
        prompt: "Patachitra painting {prompt} . bold outlines, vibrant colors, intricate detailing, mythological themes, storytelling, traditional craftsmanship",
        translation: "奥里萨邦帕达契特拉绘画{提示}。大胆的轮廓，鲜艳的色彩，复杂的细节，神话主题，讲故事，传统工艺",
        negative_prompt: "subdued colors, minimalistic, abstract, modern aesthetics",
        category: "MK"
    },
    {
        name: "萨摩亚艺术",
        prompt: "Samoan art-inspired wooden sculpture {prompt} . traditional motifs, natural elements, bold colors, cultural symbolism, storytelling, craftsmanship",
        translation: "萨摩亚艺术启发的木制雕塑{提示}。传统图案，自然元素，大胆的色彩，文化象征，故事，工艺",
        negative_prompt: "modern aesthetics, minimalist, abstract",
        category: "MK"
    },
    {
        name: "特林吉特艺术",
        prompt: "Tlingit art {prompt} . formline design, natural elements, animal motifs, bold colors, cultural storytelling, traditional craftsmanship, Alaska traditional art, (totem:1.5)",
        translation: "特林吉特艺术 {prompt}。形式设计，自然元素，动物图案，大胆的色彩，文化故事，传统工艺，阿拉斯加传统艺术，（图腾：1.5）",
        negative_prompt: "无",
        category: "MK"
    },
    {
        name: "阿丹特街头艺术",
        prompt: "Painting by Adnate {prompt} . realistic portraits, street art, large-scale murals, subdued color palette, social narratives",
        translation: "由阿丹特 {prompt}绘制。现实主义肖像，街头艺术，大型壁画，柔和的调色板，社会叙事",
        negative_prompt: "abstract, vibrant colors, small-scale art",
        category: "MK"
    },
    {
        name: "罗恩英格利什街头艺术",
        prompt: "Painting by Ron English {prompt} . pop-surrealism, cultural subversion, iconic mash-ups, vibrant and bold colors, satirical commentary",
        translation: "罗恩·英格利希画{提示}。流行超现实主义，文化颠覆，标志性的混搭，充满活力和大胆的色彩，讽刺的评论",
        negative_prompt: "traditional, monochromatic",
        category: "MK"
    },
    {
        name: "谢帕德费瑞风格",
        prompt: "Painting by Shepard Fairey {prompt} . street art, political activism, iconic stencils, bold typography, high contrast, red, black, and white color palette",
        translation: "谢泼德·费尔雷绘画{提示}。街头艺术，政治活动，标志性的模板，大胆的排版，高对比度，红色，黑色和白色的调色板",
        negative_prompt: "traditional, muted colors",
        category: "MK"
    },
    {
        name: "简单摄影",
        prompt: "{prompt},photography, capturing moments, storytelling, creative composition",
        translation: "{提示}，摄影，捕捉瞬间，讲故事，创意构图",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "航拍",
        prompt: "{prompt},aerial photography, drone photography, sweeping landscapes, unique perspectives, epic scale, capturing from above, revealing hidden beauty, showcasing vastness, immersive experience, precise compositions, expert piloting, dynamic angles, cinematic storytelling, showcasing natural wonders, aerial exploration",
        translation: "{提示}，航拍，无人机摄影，横扫景观，独特视角，史诗级规模，从上捕捉，揭示隐藏的美，展示浩瀚，沉浸式体验，精确构图，专家驾驶，动态角度，电影叙事，展示自然奇观，空中探索",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "建筑",
        prompt: "{prompt},architecture photography, striking structures, clean lines, geometric shapes, dramatic angles, play of light and shadow, capturing architectural details, showcasing design elements, evoking mood, professional lighting, precise compositions, emphasizing scale and proportion, creating depth, architectural storytelling, capturing iconic landmarks, immersive experience",
        translation: "{提示}，建筑摄影，醒目的结构，干净的线条，几何形状，戏剧性的角度，光影的游戏，捕捉建筑细节，展示设计元素，唤起情绪，专业的照明，精确的构图，强调规模和比例，创造深度，建筑讲故事，捕捉标志性地标，沉浸式体验",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "黑白摄影",
        prompt: "{prompt},black and white photography, timeless elegance, classic aesthetic, dramatic contrasts, emphasizing shapes and textures, evoking nostalgia, focusing on light and shadow, monochromatic storytelling, capturing mood and emotion, artistic expression, minimalist compositions, conveying depth and atmosphere, timeless beauty",
        translation: "{提示}，黑白摄影，永恒的优雅，经典的美学，戏剧性的对比，强调形状和纹理，唤起怀旧，注重光影，单色叙事，捕捉情绪和情感，艺术表达，极简构图，传达深度和氛围，永恒的美",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "电影风格",
        prompt: "{prompt},Cinematic photography, movie mood, cinematic light, compelling composition, storytelling elements, conveys emotion, mood, and narrative depth, creating visually striking images that feel like still frames from a film",
        translation: "{提示}，电影摄影，电影情绪，电影光线，引人注目的构图，讲故事的元素，传达情感，情绪和叙事深度，创造视觉上引人注目的图像，感觉就像电影中的静止帧",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "纪录片",
        prompt: "{prompt},documentary photography, capturing reality, social issues, human experiences, photojournalistic storytelling, candid moments, authentic narratives, raising awareness, documenting history, preserving cultural heritage, immersive storytelling, evoking empathy, powerful imagery, journalistic integrity",
        translation: "{提示}，纪实摄影，捕捉现实，社会问题，人类经验，新闻摄影讲故事，坦诚的时刻，真实的叙述，提高认识，记录历史，保护文化遗产，沉浸式讲故事，唤起同情，强大的图像，新闻诚信",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "实验摄影",
        prompt: "{prompt},experimental photography, pushing the boundaries of creativity, unconventional techniques, innovative concepts, artistic exploration, thought-provoking imagery, pushing the boundaries of traditional photography",
        translation: "{提示}，实验摄影，推动创意的边界，非传统的技术，创新的概念，艺术的探索，发人深省的图像，推动传统摄影的边界",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "时尚",
        prompt: "{prompt},fashion photography, glamorous, stylish attire, captivating pose, dynamic composition, high-fashion aesthetic, professional studio lighting, expert styling, showcasing trend, conveying elegance, conveying attitude, evoking emotion, creating visual impact, editorial storytelling, artistic interpretation, fashion-forward visual",
        translation: "{提示}，时尚摄影，光鲜亮丽，时髦着装，迷人姿势，动感构图，高级时尚美学，专业工作室灯光，专家造型，展示潮流，传达优雅，传达态度，唤起情感，创造视觉冲击，编辑叙事，艺术诠释，时尚前卫的视觉",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "时尚杂志摄影",
        prompt: "{prompt},fashion editorial photography, high-fashion imagery, avant-garde aesthetics, editorial storytelling, conveying fashion trends and concepts, artistic interpretation, expert styling, professional lighting, capturing fashion-forward visuals, creating visual impact, evoking emotion, pushing creative boundaries",
        translation: "{提示}，时尚编辑摄影，高级时尚意象，前卫美学，编辑讲故事，传达时尚趋势和概念，艺术诠释，专家造型，专业灯光，捕捉时尚前卫的视觉效果，创造视觉冲击，唤起情感，推动创意边界",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "艺术摄影",
        prompt: "{prompt},fine art photography, conceptual expression, evocative imagery, artistic interpretation, emotional resonance, creative composition, professional lighting, exquisite detail, immersive experience, storytelling through imagery, conveying mood,  unique perspective, thought-provoking concept, capturing beauty, transcending reality",
        translation: "{提示}，美术摄影，概念表达，唤起意象，艺术诠释，情感共鸣，创意构图，专业灯光，精致细节，沉浸式体验，通过意象讲故事，传达情绪，独特的视角，发人深省的概念，捕捉美，超越现实",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "花朵摄影",
        prompt: "{prompt},flower photography, capturing nature's beauty, delicate petals, vibrant colors, intricate details, showcasing botanical diversity, evoking emotions, conveying serenity, expert composition, professional lighting, immersive floral portrait, timeless elegance",
        translation: "{提示}，花卉摄影，捕捉自然之美，精致的花瓣，鲜艳的色彩，错综复杂的细节，展示植物多样性，唤起情感，传达宁静，专家构图，专业照明，沉浸式花卉肖像，永恒的优雅",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "美食摄影",
        prompt: "{prompt},food photography, mouthwatering dishes, vibrant colors, appetizing presentations, enticing compositions, delicious details, showcasing textures, capturing freshness, professional lighting, expert styling, culinary storytelling, enhancing food appeal",
        translation: "{提示}，美食摄影，令人垂涎的菜肴，充满活力的色彩，开胃的展示，诱人的构图，美味的细节，展示纹理，捕捉新鲜感，专业灯光，专家造型，烹饪故事，增强食物吸引力",
        negative_prompt: "bad anatomy, unappetizing, sloppy, unprofessional, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "风景摄影",
        prompt: "{prompt},landscape photography, vast vistas, natural beauty, dynamic compositions, captivating scenery, immersive, serene",
        translation: "{提示}，风景摄影，广阔的远景，自然之美，动态构图，迷人的景色，身临其境，宁静",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "长曝光摄影",
        prompt: "{prompt},long exposure photography, streaking lights, smooth motion, dreamy landscapes, ethereal atmosphere, light painting, creative expression, time manipulation, surreal effects, captivating visuals, artistic interpretation, immersive experience, unique perspective",
        translation: "{提示}，长曝光摄影，裸光，流畅运动，梦幻风景，空灵氛围，光画，创意表达，时间操纵，超现实效果，迷人视觉，艺术诠释，沉浸式体验，独特视角",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "低色调摄影",
        prompt: "{prompt},low key photography, dramatic lighting, deep shadows, rich contrast, moody atmosphere, intense emotions, cinematic feel, mysterious ambiance, emphasizing shape and form, creating depth, evoking drama, storytelling through shadows, professional technique",
        translation: "{提示}，低调的摄影，戏剧性的灯光，深阴影，丰富的对比，喜怒哀乐的气氛，强烈的情绪，电影的感觉，神秘的氛围，强调形状和形式，创造深度，唤起戏剧，通过阴影讲故事，专业的技术",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "微距摄影",
        prompt: "{prompt},macro photography, extreme close-ups, intricate details, unseen worlds, capturing texture, emphasizing details, revealing beauty in small things, professional lighting, precise focusing, artistic expression, immersive experience, expert technique",
        translation: "{提示}，微距摄影，极致特写，错综复杂的细节，看不见的世界，捕捉质感，强调细节，揭示小事物之美，专业的灯光，精确的对焦，艺术的表达，身临其境的体验，专家级的技术",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "显微摄影",
        prompt: "{prompt},microscopic photography, magnified, molecular, unseen worlds revealed, scientific exploration, capturing molecular details, professional imaging techniques, precise focusing, revealing hidden beauty, scientific discovery, artistic interpretation, nano scale, revealing the wonders of the unseen",
        translation: "{提示}，显微摄影，放大，分子，看不见的世界揭示，科学探索，捕捉分子细节，专业成像技术，精确聚焦，揭示隐藏的美，科学发现，艺术诠释，纳米尺度，揭示看不见的奇迹",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "极简主义摄影",
        prompt: "{prompt},minimalist photography, simplicity in composition, clean lines, uncluttered visuals, negative space, focusing on essential elements, conveying tranquility, understated beauty, elegant aesthetics, subtle storytelling, capturing the essence of minimalism",
        translation: "{提示}，极简摄影，构图简洁，线条干净，视觉整洁，负空间，注重要素，传达宁静，低调的美，优雅的美学，微妙的叙事，捕捉极简主义的精髓",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "模拟摄影",
        prompt: "{prompt},mockup photography, professional presentation, blank, empty,  creative composition, versatile use,  professional lighting, expert styling, high-quality imagery, realistic perspective, accurate representation",
        translation: "{提示}，模型摄影，专业呈现，留白，留空，创意构图，百搭使用，专业灯光，专家造型，高品质影像，逼真视角，准确表现",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "夜景摄影",
        prompt: "{prompt},night photography, nocturnal beauty, city lights, starry skies, celestial wonders, moonlit landscapes, urban glow, capturing the essence of darkness, ethereal atmosphere, dramatic shadows, magical ambiance, long exposure techniques, expert use of light sources",
        translation: "{提示}，夜间摄影，夜景，城市灯光，星空，天体奇观，月光下的风景，城市辉光，捕捉黑暗的本质，空灵的气氛，戏剧性的阴影，神奇的氛围，长时间曝光技术，光源的专家使用",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "宠物摄影",
        prompt: "{prompt},pet photography, adorable portrait, playful moment, expressive eyes, showcasing personality, professional lighting, expert composition, capturing joyful interaction, conveying emotion, creative composition, enhancing pet beauty, pet-friendly environment, storytelling through imagery",
        translation: "{提示}，宠物摄影，萌萌的人像，俏皮的瞬间，表情的眼神，展示个性，专业的灯光，专家的构图，捕捉快乐的互动，传达情感，创意的构图，提升宠物美，宠物友好的环境，通过图像讲故事",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "肖像摄影",
        prompt: "{prompt},portrait photography, capturing emotion, personality, flattering lighting, professional, engaging, compelling composition",
        translation: "{提示}，人像摄影，捕捉情感，个性，讨人喜欢的灯光，专业，迷人，引人注目的构图",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "肖像 > 电影风格",
        prompt: "{prompt},Cinematic portrait photography, capture subject in a way that resembles a still frame from a movie, cinematic lighting, story, narrative quality, drawing viewers into the scene and evoking a sense of cinematic immersion, capturing emotion, professional, engaging, compelling composition",
        translation: "{提示}，电影肖像摄影，以一种类似于电影静止帧的方式捕捉主题，电影灯光，故事，叙事质量，吸引观众进入场景并唤起电影沉浸感，捕捉情感，专业，引人入胜，引人注目的构图",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "肖像 > 特写",
        prompt: "{prompt},closeup portrait photography, beautiful eyes, capturing emotion, personality, flattering lighting, professional, engaging, compelling composition",
        translation: "{提示}，特写人像摄影，美丽的眼睛，捕捉情感，个性，讨人喜欢的灯光，专业，迷人，引人注目的构图",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "肖像 > 幻想",
        prompt: "{prompt},fantasy portrait photography, beautiful eyes, ethereal beauty, magical atmosphere, whimsical element, enchanting composition, mystical storytelling, professional lighting, imaginative concept, creative styling, otherworldly aesthetic, fantasy romance, surreal visual, enchanting character, captivating narrative, intricate detail, vibrant color, fantastical landscape",
        translation: "{提示}，奇幻肖像摄影，美丽的眼睛，空灵的美，魔幻的氛围，异想天开的元素，迷人的构图，神秘的故事，专业的灯光，想象的概念，创意的造型，超凡脱俗的审美，奇幻的浪漫，超现实的视觉，迷人的人物，迷人的叙事，错综复杂的细节，鲜艳的色彩，奇幻的风景",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "产品摄影",
        prompt: "{prompt},product photography, crisp details, clean composition, attention to detail, professional lighting, precise focus, appealing aesthetics, capturing textures, high-quality imagery, commercial appeal, creative presentation",
        translation: "{提示}，产品摄影，清晰的细节，干净的构图，注重细节，专业的灯光，精确的对焦，吸引人的美学，捕捉纹理，高品质的图像，商业诉求，创意的呈现",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "倒影反射摄影",
        prompt: "{prompt},reflection photography, mirror-like surfaces, symmetry, visual echoes, capturing dual realities, distorted perspectives, ethereal beauty, introspective imagery, mesmerizing patterns, reflecting mood and emotion, creating visual depth, playing with perception",
        translation: "{提示}，反射摄影，镜面，对称，视觉呼应，捕捉双重现实，扭曲的视角，空灵的美，内省的意象，迷人的图案，反映情绪和情感，创造视觉深度，玩感知",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "运动摄影",
        prompt: "{prompt},sport photography, action-packed moment, dynamic, intense competition, thrilling movement, showcasing skill, conveying energy, adrenaline-fueled visuals, immersive experience, storytelling through action, dramatic composition, showcasing passion, capturing decisive moments, vibrant colors, dynamic composition, powerful imagery, engaging perspective",
        translation: "{提示}，运动摄影，动作紧凑的时刻，动态，激烈的竞争，惊险的运动，展示技能，传达能量，肾上腺素刺激的视觉效果，沉浸式体验，通过动作讲故事，戏剧性的构图，展示激情，捕捉决定性的时刻，鲜艳的色彩，动态构图，强大的图像，引人入胜的视角",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "静物摄影",
        prompt: "{prompt},still life photography, capturing tranquility, timeless beauty, meticulous arrangement, exquisite detail, professional lighting, expert composition, evocative mood, storytelling through objects, artistic interpretation, creative expression, showcasing textures, intricate patterns, enhancing atmosphere, conveying emotions, masterful technique, immersive experience",
        translation: "{提示}，静物摄影，捕捉宁静，永恒之美，精心安排，精致细节，专业灯光，专家构图，唤起情绪，通过物体讲故事，艺术诠释，创意表达，展示纹理，复杂图案，提升氛围，传达情感，娴熟的技术，沉浸式体验",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "超现实摄影",
        prompt: "{prompt},surreal photography, dreamlike imagery, subconscious exploration, bending reality, imaginative narratives, juxtaposing elements, evoking wonder and awe, transcending boundaries, challenging perceptions, fantastical landscapes, otherworldly atmospheres",
        translation: "{提示}，超现实摄影，梦幻般的图像，潜意识的探索，扭曲现实，富有想象力的叙述，并置元素，唤起惊奇和敬畏，超越界限，挑战观念，幻想的风景，超凡脱俗的氛围",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "延时摄影",
        prompt: "{prompt},time-lapse photography, dynamic motion, fluid transition, changing landscape, evolving scene, captivating visual storytelling, accelerated time",
        translation: "{提示}，延时摄影，动态运动，流体过渡，变化的景观，演变的场景，迷人的视觉叙事，加速的时间",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "水下摄影",
        prompt: "{prompt},underwater photography, otherworldly landscape, unique perspective, ethereal lighting, dynamic composition, captivating underwater scene, immersive, serene, expert lighting technique, breathtaking moment captured",
        translation: "{提示}，水下摄影，超凡脱俗的风景，独特的视角，空灵的灯光，动态的构图，迷人的水下场景，身临其境，宁静，专业的灯光技术，捕捉惊险的瞬间",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "复古摄影",
        prompt: "{prompt},vintage photography, nostalgic charm, timeless appeal, old-world aesthetics, classic elegance, warm tones, soft focus, aged textures, evoking nostalgia, historical ambiance, storytelling through imagery, vintage atmosphere, timeless compositions, authentic vintage look, professional technique",
        translation: "{提示}，复古摄影，怀旧魅力，永恒的吸引力，旧世界美学，经典优雅，暖色调，软焦点，古老的纹理，唤起怀旧，历史氛围，通过图像讲故事，复古氛围，永恒的构图，正宗的复古外观，专业技术",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "自然风光摄影",
        prompt: "{prompt},wildlife photography, capturing nature's beauty, breathtaking landscapes, immersive experience, storytelling through imagery, showcasing wildlife behavior, sharp details, evocative composition, unique perspective",
        translation: "{提示}，野生动物摄影，捕捉大自然之美，令人叹为观止的风景，身临其境的体验，通过图像讲故事，展示野生动物的行为，尖锐的细节，令人回味的构图，独特的视角",
        negative_prompt: "bad anatomy, comics, cropped, cross-eyed, worst quality, low quality, painting, 3D render, drawing, crayon, sketch, graphite, impressionist, cartoon, anime, noisy, blurry, soft, deformed, ugly, lowres, low details, JPEG artifacts, airbrushed, semi-realistic, CGI, render, Blender, digital art, manga, amateur, mutilated, distorted",
        category: "摄影"
    },
    {
        name: "简单绘画",
        prompt: "{prompt},painting art style",
        translation: "{提示}，绘画艺术风格",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "抽象表现主义",
        prompt: "{prompt},Abstract Expressionism art style, emphasizes spontaneous and gestural brushwork, explores emotions and inner thoughts, non-representational and subjective, influenced by the subconscious and the act of painting itself",
        translation: "{提示}，抽象表现主义艺术风格，强调自发和手势的笔触，探索情感和内心的想法，非具象的和主观的，受潜意识和绘画行为本身的影响",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "丙烯画",
        prompt: "{prompt},Acrylic Paint art style, fast-drying paint, versatile, vibrant colors, expressive brushwork, rich textures, dynamic compositions, bold contrasts, layered depth, tactile quality, fluid movement, lively energy, immersive atmosphere, professional-grade finish",
        translation: "{提示}，丙烯漆艺术风格，快干漆，百搭，鲜艳的色彩，富有表现力的笔法，丰富的纹理，动态的构图，大胆的对比，层次的深度，触觉的品质，流畅的运动，活泼的能量，沉浸式的氛围，专业级的完成",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "喷漆画",
        prompt: "{prompt},Aerosol paint art style, spray painted, vibrant colors, seamless blending, dynamic compositions, bold contrasts, urban aesthetic, professional-grade results",
        translation: "{提示}，喷漆艺术风格，喷漆，色彩鲜艳，无缝调配，动态构图，大胆对比，都市美学，专业级效果",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "儿童图书艺术",
        prompt: "{prompt},digital painting, whimsical children's book art style,  charming and inviting illustration style, soft and rounded shapes, warm and inviting color palette, creates a friendly and serene atmosphere, simplicity and clarity make it accessible and enjoyable for a wide audience, imaginative scene with fantastical elements in a storybook-like setting, encourages viewer's sense of wonder and exploration",
        translation: "{提示}，数字绘画，异想天开的儿童书籍艺术风格，迷人和诱人的插图风格，柔和和圆润的形状，温暖和诱人的调色板，创造了一个友好和宁静的氛围，简单和清晰使其易于接近和享受广大观众，在故事书般的设置中充满幻想元素的想象场景，鼓励观众的惊奇和探索感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "中国水墨画",
        prompt: "{prompt},Chinese ink brush art style, graceful brushwork, elegant compositions, traditional motifs, professional-grade execution, captures the essence of Chinese culture and aesthetics",
        translation: "{提示}，中国水墨艺术风格，优美的笔法，优雅的构图，传统的图案，专业级的执行，捕捉了中国文化和美学的精髓",
        negative_prompt: "Chinese writing, signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "中国工笔画",
        prompt: "Traditional Chinese realistic painting, Gongbi, {prompt}. It uses highly detailed brushstrokes that delimit details very precisely.  It is highly colored.",
        translation: "中国传统写实绘画，工笔画，{提示}。它使用非常细致的笔触，非常精确地划分细节。它的颜色很鲜艳。",
        negative_prompt: "Chinese writing, signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "数码绘画",
        prompt: "{prompt},Digital painting art style, dynamic composition, professional-grade execution",
        translation: "{提示}，数字绘画艺术风格，动态构图，专业级执行",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "数码幻想游戏艺术",
        prompt: "{prompt},digital painting art style, fantasy video game concept art style, dynamic and richly detailed composition, vibrant colors, action-packed scene, emphasizes dramatic poses and expressive faces, immersive environments with fantasy backgrounds, designed to draw viewers into fantastical worlds, typical for character and environment designs in video games",
        translation: "{prompt}，数字绘画艺术风格，幻想电子游戏概念艺术风格，动态和丰富的细节组成，鲜艳的色彩，动感十足的场景，强调戏剧性的姿势和富有表现力的面孔，沉浸式的环境与幻想背景，旨在吸引观众进入幻想的世界，典型的电子游戏中的角色和环境设计",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "幻想艺术",
        prompt: "{prompt},Fantasy painting art style, imaginative, dynamic composition, professional-grade execution, creates immersive world and landscape, painterly, epic, magical",
        translation: "{提示}，奇幻绘画艺术风格，富有想象力、动感的构图，专业级的执行，营造出身临其境的世界与风景，绘画般的、史诗般的、魔幻般的",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "幻想卡通",
        prompt: "{prompt},Fantasy cartoon concept art style, cartoon cute digital painting, imaginative, dynamic composition, whimsical expression, adorable, playful character, professional-grade execution, creates immersive world and landscape, brush strokes",
        translation: "{提示}，奇幻的卡通概念艺术风格，卡通可爱的数字绘画，富有想象力，动态的构图，异想天开的表达，可爱，俏皮的性格，专业级的执行，创造身临其境的世界和风景，笔触",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "幻想数码艺术",
        prompt: "{prompt},Fantasy concept art style, digital painting, imaginative, dynamic composition, professional-grade execution, creates immersive world and landscape, brush strokes, epic, magical",
        translation: "{提示}，奇幻概念艺术风格，数字绘画，富有想象力，动态构图，专业级执行，创造身临其境的世界和风景，笔触，史诗，魔幻",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "幻想游戏概念物品",
        prompt: "{prompt},Fantasy game concept art on solid color background, game item design, detailed and painterly style, focus on fantasy elements, attention to texture and additional elements like, suitable for video games or animation",
        translation: "{提示}，幻想类游戏概念美术以纯色为背景，游戏道具设计，细节和绘画风格，注重幻想元素，注重纹理和附加元素喜欢，适合电子游戏或动画",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "壁画",
        prompt: "{prompt},Fresco painting art style, ancient painting technique dating back to antiquity, rich colors and textures, timeless aesthetic, historical significance, evokes a sense of tradition and craftsmanship",
        translation: "{提示}，壁画的艺术风格，古老的绘画手法可以追溯到古代，丰富的色彩和纹理，永恒的审美，历史意义，唤起传统和工艺感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "树胶水彩画",
        prompt: "{prompt},gouache painting style, gouache opaque colors, matte finish, vibrant hues, dynamic compositions, professional-grade result, adds depth and texture",
        translation: "{提示}，水粉绘画风格，水粉不透明的颜色，哑光处理，充满活力的色调，动态的构图，专业级的结果，增加了深度和质感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "树胶水彩画卡通",
        prompt: "{prompt},gouache painting style, gouache vibrant colors, adorable, whimsical expression, playful character, dynamic compositions, professional-grade result, adds depth and texture",
        translation: "{提示}，水粉的画风，水粉鲜艳的色彩，可爱，异想式的表达，俏皮的性格，动态的构图，专业级的效果，增加了深度和质感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "涂鸦",
        prompt: "{prompt},Graffiti aerosol painting art style, bold composition, vibrant colors, mural, urban aesthetic, hip hop culture",
        translation: "{提示}，涂鸦喷雾画的艺术风格，大胆的构图，鲜艳的色彩，壁画，城市美学，嘻哈文化",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "黑暗风格",
        prompt: "{prompt},Grimdark painting art style, dark and brooding composition, dramatic lighting, captures the sinister and macabre atmosphere",
        translation: "{提示}，Grimdark绘画艺术风格，黑暗而深沉的构图，戏剧性的灯光，捕捉险恶和恐怖的气氛",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "厚涂画",
        prompt: "{prompt},impasto painting art style, thick and textured brushwork, vibrant colors, tactile quality, expressive strokes, dynamic compositions, bold contrasts, dramatic lighting effects, immersive texture, professional-grade finish, adds depth and dimension, creates visual interest",
        translation: "{提示}，impimpto绘画艺术风格，厚实而有质感的笔触，充满活力的色彩，触感的品质，富有表现力的笔触，动态的构图，大胆的对比，戏剧性的灯光效果，身临其境的质感，专业级的完成，增加深度和维度，创造视觉趣味",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "印象派绘画风格",
        prompt: "{prompt},Impressionism painting art style, loose brushwork, captures the fleeting effects of light and atmosphere",
        translation: "{提示}，印象派绘画艺术风格，松散的笔触，捕捉转瞬即逝的光和气氛的效果",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "魔幻现实主义",
        prompt: "{prompt},Magic realism painting art style, surreal compositions, vibrant colors, blurs the line between reality and fantasy",
        translation: "{提示}，魔幻现实主义绘画的艺术风格，超现实的构图，鲜艳的色彩，模糊了现实与幻想的界限",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "油画",
        prompt: "{prompt},oil painting art style, rich colors, lush textures, expressive brushwork, blendable layers, dynamic compositions, professional-grade finish, versatile medium, timeless elegance, immersive depth, vibrant hues, intricate detailing, adds depth and dimension",
        translation: "{提示}，油画艺术风格，丰富的色彩，郁郁葱葱的纹理，富有表现力的笔法，可混合的层次，动态构图，专业级的完成，多才多艺的介质，永恒的优雅，沉浸式的深度，充满活力的色调，复杂的细节，增加了深度和维度",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "调色刀",
        prompt: "{prompt},palette knife painting art style, bold textures, impasto effects, expressive strokes, vibrant colors, dynamic compositions, professional-grade finish, adds depth and dimension, creates tactile quality, immersive texture, contemporary aesthetic",
        translation: "{提示}，调色板刀画艺术风格，大胆的纹理，impimpa效果，富有表现力的笔触，充满活力的色彩，动态的构图，专业级的完成，增加深度和维度，创造触觉品质，沉浸质感，当代美学",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "点彩派",
        prompt: "{prompt},Pointillism art style, uses dots of color to create images, optical blending creates vibrant and textured surfaces",
        translation: "{提示}，点彩艺术风格，使用颜色点来创建图像，光学混合创建充满活力和纹理的表面",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "文艺复兴",
        prompt: "{prompt},oil painting art style from Renaissance period, masterful composition, Renaissance mood, renaissance oil painting, brush strokes",
        translation: "{提示}，油画艺术风格来自文艺复兴时期，娴熟的构图，文艺复兴时期的情绪，文艺复兴时期的油画，笔触",
        negative_prompt: "painting frame, signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "复古未来主义",
        prompt: "{prompt},Retrofuturism painting art style, nostalgic composition, combines retro aesthetics with futuristic elements",
        translation: "{提示}，复古未来主义绘画艺术风格，怀旧构图，将复古美学与未来主义元素相结合",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "日本水墨画",
        prompt: "{prompt},Sumi-e painting style, traditional Japanese ink wash painting, emphasizes simplicity and elegance, expressive brushwork, captures the essence of the subject with minimal strokes, meditative and reflective",
        translation: "{提示}，Sumi-e画风，日本传统水墨画，强调简洁优雅，笔法富有表现力，以最小的笔触捕捉主题的精髓，冥想和反思",
        negative_prompt: "Japanese writing, Chinese writing, chinese stamp, signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "水彩画",
        prompt: "{prompt},Watercolor painting art style, transparent and delicate layers, luminous and ethereal effects, spontaneous and fluid compositions, subtle gradients and blending, captures light and atmosphere, creates soft and dreamy scenes",
        translation: "{提示}，水彩画的艺术风格，透明细腻的层次，明亮空灵的效果，自然流畅的构图，微妙的渐变和混合，捕捉光线和气氛，营造柔和梦幻的场景",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "水彩画 > 卡通",
        prompt: "{prompt},Cartoon watercolor painting style, playful cartoon character, dynamic composition, whimsical expression, soft and fluid texture, adds charm and personality, subtle gradients and blending, captures light and atmosphere, creates soft and dreamy scenes, watercolor texture",
        translation: "{提示}，卡通水彩画风，俏皮的卡通人物，动态的构图，异想一格的表达，柔和流畅的质感，增添魅力和个性，微妙的渐变和混合，捕捉光线和气氛，营造柔和梦幻的场景，水彩质感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "水彩画白色背景",
        prompt: "{prompt},Watercolor painting art style, isolated on solid white background, transparent and delicate layers, luminous and ethereal effects,  subtle gradients and blending, captures light and atmosphere, creates soft and dreamy scenes",
        translation: "{提示}，水彩画艺术风格，孤立在纯白色的背景上，透明细腻的层次，明亮而空灵的效果，微妙的渐变和混合，捕捉光线和气氛，营造柔和而梦幻的场景",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "绘画"
    },
    {
        name: "简单插画",
        prompt: "{prompt},Illustration art style",
        translation: "{提示}，绘画艺术风格",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "艺术装饰",
        prompt: "{prompt},Art Deco illustration style, elegant and geometric designs, streamlined and symmetrical compositions, embodies the glamour and sophistication of the Art Deco era, influenced by modernism and machine aesthetics",
        translation: "{提示}，装饰艺术插画风格，优雅的几何设计，流线型对称的构图，体现了装饰艺术时代的魅力和精致，受到现代主义和机器美学的影响",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "日式动漫",
        prompt: "{prompt},anime art style, anime digital art, expressive anime art, dynamic composition, anime style, vibrant, studio anime, highly detailed",
        translation: "{提示}，动漫艺术风格，动漫数字艺术，表现性动漫艺术，动态构图，动漫风格，充满活力，工作室动漫，高度细致",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "日式动漫 > 萌系",
        prompt: "{prompt},Chibi anime art style, cute and exaggerated characters, large heads and small bodies, expressive facial features, playful and whimsical, popular in manga and anime fandoms",
        translation: "{提示}，赤壁动漫的艺术风格，可爱夸张的人物，大头小身，表情丰富的五官，俏皮又异想天开，深受动漫爱好者的喜爱",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "日式动漫 > 可爱",
        prompt: "{prompt},Kawaii anime art style, cute, adorable characters with big eyes and small mouths, pastel colors, playful and endearing",
        translation: "{提示}，卡哇伊动画的艺术风格，可爱，可爱的人物与大眼睛和小嘴巴，柔和的颜色，俏皮和可爱",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "日式动漫 > 机甲",
        prompt: "{prompt},Mecha anime art style, focuses on giant robots and mechanical suits, intricate mechanical designs, dynamic action scenes, futuristic settings, appeals to fans of science fiction and action genres",
        translation: "{prompt}，机甲动画艺术风格，专注于巨型机器人和机械套装，复杂的机械设计，动态的动作场景，未来的设置，吸引科幻和动作类型的粉丝",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "日式动漫 > 写实",
        prompt: "{prompt},Realistic anime art style, combines anime aesthetics with lifelike details, detailed character designs, intricate backgrounds, immersive storytelling",
        translation: "{提示}，逼真的动画艺术风格，将动画美学与逼真的细节相结合，细致的人物设计，复杂的背景，沉浸式的故事讲述",
        negative_prompt: "painting, drawing, signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "卡通",
        prompt: "{prompt},Cartoon illustration style, whimsical and expressive characters, exaggerated features and emotions, versatile and adaptable for various storytelling purposes",
        translation: "{提示}，卡通插画风格，异想天开和富有表现力的人物，夸张的特征和情感，多功能和适应各种讲故事的目的",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "卡通角色白色背景",
        prompt: "{prompt},cartoon digital painting art style, isolated on solid white background, adorable, big eyes, cute cartoon character",
        translation: "{提示}，卡通数字绘画艺术风格，孤立在纯白色背景上，可爱，大眼睛，可爱的卡通人物",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "儿童图书",
        prompt: "{prompt},Children's book illustration style, whimsical and charming imagery, bright and playful colors, engaging characters and storytelling, cartoon",
        translation: "{提示}，童书插画风格，意象异想天开迷人，色彩鲜艳俏皮，人物引人入胜，讲故事，卡通化",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "幻想",
        prompt: "{prompt},Fantasy illustration style, transports viewers to imaginative worlds, epic landscape, and heroic adventures, sparks wonder and inspiration",
        translation: "{提示}，奇幻插画风格，将观众带入富有想象力的世界，史诗般的风景和英雄般的冒险，激发奇迹和灵感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "幻想卡通白色背景",
        prompt: "{prompt},Watercolor cartoon illustration on solid white background, enchanted, adorable, Digital Cartoon Illustration, a simple and charming design",
        translation: "{提示}，纯白色背景水彩卡通插画，迷人，可爱，数字卡通插画，一个简单而迷人的设计",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "时尚",
        prompt: "{prompt},Fashion illustration style, captures the latest trends and designs in clothing and accessories, elegant and stylized figures, showcases creativity and imagination in the fashion industry",
        translation: "{提示}，时尚插画风格，捕捉服装和配饰的最新趋势和设计，优雅而风格化的人物，展示时尚界的创造力和想象力",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "游戏艺术",
        prompt: "{prompt},Game art illustration style, game illustration, diverse and immersive visuals, whimsical, dynamic characters and environments, rich color palettes, enhances storytelling and gameplay experience",
        translation: "{提示}，游戏美术插图风格，游戏插图，多样化和身临其境的视觉效果，异想天开，动态的人物和环境，丰富的调色板，增强故事叙述和游戏体验",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "手抄本",
        prompt: "{prompt},Illuminated manuscript art style illustration, medieval illustration, intricate and detailed illustration, vibrant colors and gold leaf accents,  showcases meticulous craftsmanship and dedication",
        translation: "{提示}，彩绘手稿艺术风格插图，中世纪插图，复杂细致的插图，鲜艳的色彩和金箔的色调，展示了细致的工艺和奉献精神",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "波普艺术",
        prompt: "{prompt},Pop art illustration style, vibrant and bold colors, uses imagery from popular culture, incorporate elements of mass media and consumerism, celebrates the mundane and everyday objects",
        translation: "{prompt}，波普艺术插画风格，充满活力和大胆的色彩，使用来自流行文化的图像，结合大众媒体和消费主义的元素，庆祝平凡和日常物品",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "复古",
        prompt: "{prompt},Retro illustration style, nostalgic and vintage aesthetics, inspired by design elements from past decades, evokes a sense of nostalgia and charm",
        translation: "{提示}，复古插画风格，怀旧复古美学，灵感来自过去几十年的设计元素，唤起怀旧感和魅力",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "现代",
        prompt: "{prompt},Modern illustration style, contemporary and cutting-edge, embraces new techniques and technologies, reflects current trends and cultural influences",
        translation: "{提示}，现代插画风格，当代和前沿，拥抱新的技术和技术，反映当前的趋势和文化影响",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "现代主义",
        prompt: "{prompt},Modernism illustration style, embraces experimentation and abstraction, breaks away from traditional representation, explores new forms and techniques, reflects the spirit of innovation and progress.",
        translation: "{prompt}，现代主义插画风格，拥抱实验和抽象，脱离传统的表现形式，探索新的形式和技术，体现创新和进步的精神。",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "贴纸",
        prompt: "{prompt},Sticker art style isolated on solid color background",
        translation: "{提示}，贴纸艺术风格孤立的纯色背景",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "贴纸可爱",
        prompt: "{prompt},Cute adorable cartoon sticker art style isolated on solid color background, charming and endearing characters or designs, appeals to emotions like joy and affection",
        translation: "{提示}，可爱可爱的卡通贴纸艺术风格，孤立在纯色背景上，迷人可爱的人物或设计，吸引人的情绪，如欢乐和亲情",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "贴纸水彩",
        prompt: "{prompt},Sticker art style isolated on solid color background, watercolor painting art style, transparent and delicate layers, luminous and ethereal effects, spontaneous and fluid compositions, subtle gradients and blending",
        translation: "{提示}，在纯色背景上孤立的贴纸艺术风格，水彩绘画艺术风格，透明细腻的层次，发光空灵的效果，自发而流畅的构图，微妙的渐变和混合",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "插画"
    },
    {
        name: "简单手绘",
        prompt: "{prompt},drawing art style, expressive lines, dynamic composition",
        translation: "{提示}，绘画艺术风格，线条表现力，构图动感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "蓝色圆珠笔",
        prompt: "{prompt},dark blue color ballpoint pen drawing art style, expressive dark blue lines, dynamic compositions, professional-grade execution, captures the spontaneity and fluidity of sketching",
        translation: "{提示}，深蓝色圆珠笔绘画的艺术风格，富有表现力的深蓝色线条，动态的构图，专业级的执行，捕捉写生的自发性和流动性",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "漫画",
        prompt: "{prompt},Caricature art style, exaggerated features, humorous interpretation, dynamic composition, professional-grade execution, adds humor and personality, captures essence in a playful manner",
        translation: "{提示}，漫画的艺术风格，夸张的特征，幽默的诠释，动态的构图，专业级的执行，增加幽默和个性，以俏皮的方式捕捉本质",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "极限漫画",
        prompt: "{prompt},caricature art style, highly exaggerated features, humorous interpretation, bold and dynamic composition, professional-grade execution, adds humor and personality, captures essence in a exaggerated playful manner",
        translation: "{提示}，漫画的艺术风格，高度夸张的特征，幽默的诠释，大胆而动态的构图，专业级的执行，添加幽默和个性，以夸张的俏皮方式捕捉本质",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "炭画",
        prompt: "{prompt},charcoal drawing style, dramatic contrast, expressive strokes, rich textures, dynamic composition, professional-grade finish, classic aesthetic",
        translation: "{提示}，炭笔画风，对比戏剧性，笔触表现力强，肌理丰富，构图动感，专业级光洁度，经典美学",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "彩色铅笔",
        prompt: "{prompt},Colored pencil drawing art style, vibrant colors, delicate shading, professional-grade execution, captures the richness and depth of traditional drawing techniques",
        translation: "{提示}，彩色铅笔画的艺术风格，鲜艳的色彩，细腻的阴影，专业级的执行，捕捉传统绘画技术的丰富性和深度",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "石墨",
        prompt: "{prompt},graphite drawing art style, subtle tones, delicate shading, precise detailing, fine textures, expressive lines, intricate compositions, timeless elegance, professional-grade finish, immersive depth, classic aesthetic",
        translation: "{提示}，石墨绘画艺术风格，微妙的色调，细腻的阴影，精确的细节，细腻的纹理，富有表现力的线条，复杂的构图，永恒的优雅，专业级的光洁度，身临其境的深度，经典的审美",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "墨水",
        prompt: "{prompt},Ink drawing art style, bold lines, expressive strokes, high contrast, intricate details, dynamic compositions, versatile medium, professional-grade finish, classic aesthetic, adds depth and texture, timeless elegance",
        translation: "{提示}，水墨画艺术风格，大胆的线条，富有表现力的笔触，高对比度，复杂的细节，动态的构图，万能的介质，专业级的处理，经典的美学，增添了深度和质感，永恒的优雅",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "粉彩",
        prompt: "{prompt},pastel drawing art style, pastel colors, delicate shading, dynamic composition, soft and velvety pastel textures, amazing pastel drawing",
        translation: "{提示}，粉彩绘画的艺术风格，柔和的色彩，细腻的阴影，动态的构图，柔软和天鹅绒般的粉彩纹理，惊人的粉彩绘画",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "钢笔",
        prompt: "{prompt},pen drawing art style, precise lines, intricate details, high contrast, dynamic compositions, versatile medium, professional-grade finish, timeless elegance, creates bold and expressive strokes",
        translation: "{提示}，笔画艺术风格，精确的线条，复杂的细节，高对比度，动态构图，万能的介质，专业级的完成，永恒的优雅，创造大胆和富有表现力的笔触",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "铅笔",
        prompt: "{prompt},Pencil drawing art style, delicate shading, precise lines, professional-grade execution, captures the subtlety and texture of graphite",
        translation: "{提示}，铅笔画艺术风格，细腻的阴影，精确的线条，专业级的执行，捕捉到石墨的微妙和质感",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "刮画",
        prompt: "{prompt},Scratchboard drawing art style, intricate details, dramatic contrast, professional-grade execution, captures the tactile quality and depth of etching",
        translation: "{提示}，刮板绘画艺术风格，复杂的细节，戏剧性的对比，专业级的执行，捕捉触觉质量和深度的蚀刻",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "技术绘图",
        prompt: "{prompt},Technical drawing art style, precise and detailed, emphasizes accuracy and clarity, communicates complex ideas visually",
        translation: "{提示}，技术绘画艺术风格，精确细致，强调准确和清晰，视觉传达复杂的想法",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "禅绕画",
        prompt: "{prompt},Zentangle drawing art style, clean, minimalist, meditative and relaxing, uses repetitive patterns and structured designs to create intricate and abstract artworks, precise lines, professional-grade execution, contrast, black and white",
        translation: "{提示}，Zentangle绘画艺术风格，干净，极简，冥想和放松，使用重复的图案和结构化的设计，创造复杂而抽象的艺术品，精确的线条，专业级的执行，对比，黑白",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "手绘"
    },
    {
        name: "简单3D",
        prompt: "{prompt},professional 3d render, 3D render artistic style, intricate details, creative composition, professional rendering, photorealistic textures, dynamic lighting, captivating visuals, octane render, highly detailed, volumetric, dramatic lighting",
        translation: "{提示}，专业3d渲染，3d渲染艺术风格，复杂的细节，创意构图，专业渲染，逼真的纹理，动态照明，迷人的视觉效果，辛烷值渲染，高度详细，体积，戏剧性的照明",
        negative_prompt: "low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "抽象",
        prompt: "{prompt},abstract 3D render, abstract 3d art, imaginative design, dynamic lighting, immersive presentation, captivating visuals, high-quality rendering techniques, innovative concept, unique aesthetics, creative compositions, visually stunning results, volumetric, 4k",
        translation: "{提示}，抽象3D渲染，抽象3D艺术，富有想象力的设计，动态照明，沉浸式呈现，迷人的视觉效果，高质量的渲染技术，创新的概念，独特的美学，创意的构图，视觉上惊人的效果，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "抽象 > 流体动力学",
        prompt: "{prompt},fluid dynamics 3D art style, 3d fluid render, expressive and dynamic, vibrant contrasting colors, lively appearance, mesmerizing flow of shapes, simulation of fluid dynamics, swirling motion, bold colors blending seamlessly, abstract and captivating, fluidity and energy, mesmerizing composition, engaging viewer experience, seamless integration of colors and shapes, volumetric, 4k",
        translation: "{提示}，流体动力学3D艺术风格，3D流体渲染，表现力和动态，鲜明的对比色，活泼的外观，迷人的流动形状，模拟流体动力学，旋转运动，大胆的颜色无缝混合，抽象和迷人，流动性和能量，迷人的构图，引人入胜的观众体验，无缝融合的颜色和形状，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "抽象 > 柔体",
        prompt: "{prompt},modern abstract 3D art style, focusing on organic shapes and objects, soft colors, captivating composition, tactile qualities, smoothness, softness, contrast between matte and shiny textures, depth and interest, blend of textures, minimalistic yet complex aesthetic, volumetric, 4k",
        translation: "{提示}，现代抽象3D艺术风格，专注于有机形状和物体，柔和的色彩，迷人的构图，触觉质量，平滑，柔软，哑光和闪亮纹理之间的对比，深度和兴趣，纹理混合，简约而复杂的美学，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "建筑",
        prompt: "{prompt},professional 3D architectural rendering, realistic visualization, intricate detailing, lifelike textures, dynamic lighting, immersive environment, photorealistic representation, captivating visuals, realistic materials, professional rendering techniques, volumetric, 4k",
        translation: "{提示}，专业的3D建筑渲染，逼真的可视化，复杂的细节，逼真的纹理，动态照明，沉浸式环境，逼真的表现，迷人的视觉效果，逼真的材料，专业的渲染技术，体积，4k",
        negative_prompt: "painting, low-quality rendering, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "角色",
        prompt: "{prompt},professional 3D character design,  dynamic pose, expert character design, engaging storytelling, captivating visuals, imaginative concept, high-quality rendering, volumetric, 4k",
        translation: "{提示}，专业的3D人物设计，动态姿态，专家人物设计，引人入胜的故事，迷人的视觉效果，富有想象力的概念，高质量的渲染，体积，4k",
        negative_prompt: "low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "角色 > 卡通",
        prompt: "{prompt},professional 3D cartoon character design, whimsical animation, vibrant personality, exaggerated features, dynamic pose, expert character design, colorful textures, engaging storytelling, versatile animation styles, captivating visuals, imaginative concepts, playful interactions, high-quality rendering, volumetric, 4k",
        translation: "{提示}，专业的3D卡通人物设计，异想天开的动画，充满活力的个性，夸张的特征，动态的姿势，专家的人物设计，丰富多彩的纹理，引人入胜的故事，多样的动画风格，迷人的视觉效果，富有想象力的概念，俏皮的互动，高品质的渲染，体积，4k",
        negative_prompt: "low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "角色 > 卡通可爱",
        prompt: "{prompt},professional 3D design of a cute and adorable cartoon character with big eyes, charming animation, endearing personality, exaggerated features, dynamic pose, captivating expression, expert character design, vibrant and colorful textures, engaging storytelling, versatile animation style, high-quality render, volumetric, 4k",
        translation: "{提示}，专业3D设计一个可爱可爱的卡通人物，大眼睛，迷人的动画，可爱的个性，夸张的特征，动态的姿势，迷人的表情，专家的人物设计，充满活力和丰富多彩的纹理，引人入胜的故事，多才多艺的动画风格，高品质的渲染，体积，4k",
        negative_prompt: "low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "游戏资产",
        prompt: "{prompt},3d game item, high-quality 3D rendering of a game asset, dynamic lighting, captivating visuals, seamless integration, realistic materials, high-quality rendering techniques, versatile application, innovative concepts, optimized for gaming engines, volumetric, 4k",
        translation: "{提示}，3d游戏项目，游戏资产的高质量3d渲染，动态照明，迷人的视觉效果，无缝集成，逼真的材料，高质量的渲染技术，多功能应用，创新的概念，针对游戏引擎优化，体积，4k",
        negative_prompt: "low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "硬表面",
        prompt: "{prompt},professional hard surface 3D design modeling, hard surface expert modeling, hard surface 3d render, precise detailing, captivating visuals, professional-grade design, dynamic appearance, attention-grabbing aesthetics, high-quality rendering techniques, volumetric, 4k",
        translation: "{提示}，专业硬表面3D设计建模，硬表面专家建模，硬表面3D渲染，精确细节，迷人视觉，专业级设计，动态外观，引人注目的美学，高品质渲染技术，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "图标",
        prompt: "{prompt},3D icon design, isolated on solid background, creative icon design, minimalist, depth and dimensionality, dynamic lighting, captivating visuals, high-quality rendering techniques, volumetric, 4k",
        translation: "{prompt}，3D图标设计，隔离在坚实的背景上，创意图标设计，极简主义，深度和维度，动态照明，迷人的视觉效果，高质量的渲染技术，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "等距视图",
        prompt: "{prompt},isometric 3D render, isometric 3D design, isometric perspective, precise perspective, clean, dynamic lighting, captivating visuals, immersive presentation, high-quality rendering techniques, volumetric, dramatic lighting, 4k",
        translation: "{提示}，等距3D渲染，等距3D设计，等距透视，精确透视，干净，动态照明，迷人的视觉效果，沉浸式呈现，高品质渲染技术，体积，戏剧性照明，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "低多边形",
        prompt: "{prompt},Low poly 3D design aesthetic, minimalist and stylized appearance, expert modeling software, efficient detailing, immersive presentation, captivating visuals, professional-grade design, dynamic and clean appearance, versatile application, attention-grabbing aesthetics, efficient rendering, suitable for performance-sensitive applications such as games and simulations",
        translation: "{提示}，低多边形3D设计美学，极简风格的外观，专家的建模软件，高效的细节，沉浸式的呈现，迷人的视觉效果，专业级的设计，动态干净的外观，多功能的应用，引人注目的美学，高效的渲染，适合性能敏感的应用，如游戏和模拟",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "机甲",
        prompt: "{prompt},3d mechanical render, mech style, scifi, futuristic, detailed mech 3D rendering, intricate design, dynamic lighting, captivating visuals, high-quality rendering techniques, futuristic aesthetics, volumetric, 4k",
        translation: "{提示}，3d机械渲染，机甲风格，科幻，未来主义，详细的机甲3d渲染，复杂的设计，动态照明，迷人的视觉效果，高质量的渲染技术，未来主义美学，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "模型",
        prompt: "{prompt},detailed 3D model representation, 3d render, captivating visuals, professional-grade design, dynamic appearance, high-quality rendering techniques, volumetric, 4k",
        translation: "{提示}，详细的3D模型表示，3D渲染，迷人的视觉效果，专业级设计，动态外观，高质量的渲染技术，体积，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "产品",
        prompt: "{prompt},professional 3d model, 3D product visualization, octane render, immersive presentation, photorealistic rendering, captivating visuals, realistic materials, highly detailed, volumetric, dramatic lighting, 4k",
        translation: "{提示}，专业3d模型，3d产品可视化，辛烷值渲染，沉浸式呈现，逼真的渲染，迷人的视觉效果，逼真的材料，高度细致，体积，戏剧性的照明，4k",
        negative_prompt: "low poly, blurry, painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "科幻",
        prompt: "{prompt},futuristic 3D rendering, imaginative design, dynamic lighting, immersive presentation, volumetric, futuristic elements, captivating visuals, realistic materials, high-quality rendering techniques, innovative concepts, otherworldly atmosphere, futuristic aesthetics, immersive storytelling, 4k",
        translation: "{提示}，未来主义3D渲染，富有想象力的设计，动态照明，沉浸式呈现，体积，未来主义元素，迷人的视觉效果，逼真的材料，高质量的渲染技术，创新的概念，超凡脱俗的氛围，未来主义的美学，沉浸式的故事讲述，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "车辆",
        prompt: "{prompt},professional 3D vehicle render, realistic representation, intricate detailing, dynamic lighting, immersive presentation, seamless integration, photorealistic rendering, captivating visuals, realistic materials, high-quality rendering techniques, octane render, highly detailed, volumetric, dramatic lighting, 4k",
        translation: "{提示}，专业的3D车辆渲染，逼真的表现，复杂的细节，动态照明，沉浸式呈现，无缝集成，逼真的渲染，迷人的视觉效果，逼真的材料，高质量的渲染技术，辛烷值渲染，高度详细，体积，戏剧性的照明，4k",
        negative_prompt: "painting, low-quality rendering, photo, photorealistic, realism, ugly, worst quality, low quality, lowres, JPEG artifacts",
        category: "3D"
    },
    {
        name: "简单矢量艺术",
        prompt: "{prompt},Vector art style, crisp lines, scalable graphics, professional-grade execution, clean, sharp",
        translation: "{提示}，矢量美术风格，线条清晰，图形可伸缩，专业级执行，干净，锐利",
        negative_prompt: "painting, signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "着色书页",
        prompt: "{prompt},Vector coloring book page style, clean and crisp lines, on solid white background, scalable and editable artwork, suitable for printing and digital coloring, promotes creativity and relaxation, black and white, contrast, profesional, minimalist",
        translation: "{提示}，矢量着色书的页面风格，干净利落的线条，在纯白色的背景上，可伸缩和可编辑的艺术品，适合印刷和数字着色，促进创造力和放松，黑白，对比，专业，极简",
        negative_prompt: "painting, signature, shading, gray, gradient, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "平面艺术风格",
        prompt: "{prompt},Modern flat vector style art on solid color background, minimalist,  flat vector art, corporate artstyle, simplified shapes, modern color palette, modern conceptual art, clean lines, geometric forms, contemporary graphic design influence, stylized character features, playful touch, visually appealing, clear communication of ideas, suitable for modern media, web design, advertising, cheerful and engaging aesthetic, easily adaptable",
        translation: "{提示}，纯色背景上的现代平面矢量风格艺术，极简主义，平面矢量艺术，企业艺术风格，简化的形状，现代的调色板，现代的概念艺术，简洁的线条，几何形式，当代平面设计的影响，风格化的人物特征，俏皮的触感，视觉上吸引人，清晰的思想传达，适合现代媒体，网页设计，广告，开朗迷人的审美，易于适应",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "线艺术",
        prompt: "{prompt},black vector line art on solid white background, minimalist, vector line art style, clean lines, scalable graphics, professional-grade execution, stylized, professional vector, sleek, modern, graphic, vector graphics",
        translation: "{提示}，纯白色背景上的黑色矢量线条艺术，极简主义，矢量线条艺术风格，干净的线条，可缩放的图形，专业级执行，风格化，专业矢量，时尚，现代，图形，矢量图形",
        negative_prompt: "painting, signature, shading, gradient, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "LOGO标志符号",
        prompt: "{prompt},vector logo art style, on solid color background, vector logo symbol, stylized logo, logo icon, minimalist, clean, clean and scalable designs, precise lines, professional-grade execution, emphasizes simplicity and versatility",
        translation: "{提示}，矢量标志艺术风格，在纯色背景上，矢量标志符号，风格化的标志，标志图标，极简，干净，干净和可伸缩的设计，精确的线条，专业级的执行，强调简单和多功能性",
        negative_prompt: "signature, shading, gradient, painting, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "剪影",
        prompt: "{prompt},black vector silhouette on solid white background, minimalist, SVG silhouette art style, clean lines and shapes, scalable graphics, professional-grade execution, stylized, professional vector",
        translation: "{提示}，纯白色背景上的黑色矢量剪影，极简主义，SVG剪影艺术风格，线条和形状干净，图形可伸缩，专业级执行，风格化，专业矢量",
        negative_prompt: "signature, shading, gradient, painting, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "剪影可爱",
        prompt: "{prompt},cute cartoon black vector silhouette on solid white background, minimalist, SVG silhouette art style, adorable, clean lines and shapes, scalable graphics, professional-grade execution, stylized cartoon, professional cartoon vector",
        translation: "{提示}，可爱的卡通黑色矢量剪影在纯白色的背景，极简主义，SVG剪影艺术风格，可爱，干净的线条和形状，可伸缩的图形，专业级的执行，风格化的卡通，专业的卡通矢量",
        negative_prompt: "signature, shading, gradient, painting, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "矢量"
    },
    {
        name: "简单设计",
        prompt: "{prompt},design style, professional design",
        translation: "{提示}，设计风格，专业设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "头像",
        prompt: "{prompt},Avatar design style, visually appealing and distinctive avatar, professional-grade execution, represents individual or brand identity effectively, enhances online presence and engagement",
        translation: "{提示}，头像的设计风格，视觉上吸引人且与众不同的头像，专业级的执行，有效地代表个人或品牌身份，提高在线存在感和参与度",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "Banner横幅",
        prompt: "{prompt},Banner design style, eye-catching and informative banner, professional-grade execution, effectively communicates message or event details, captures attention",
        translation: "{提示}，Banner设计风格，醒目翔实的Banner，专业级的执行，有效传达信息或事件细节，抓住注意力",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "小册子",
        prompt: "{prompt},Brochure design style, informative and visually appealing layout, professional-grade execution, effectively communicates product or service details, enhances brand credibility",
        translation: "{提示}，宣传册设计风格，内容翔实、视觉吸引人的版面，专业级的执行，有效传达产品或服务细节，提升品牌公信力",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "名片",
        prompt: "{prompt},Business card design style, professional and memorable card, professional-grade execution, effectively represents brand identity and contact information",
        translation: "{提示}，名片设计风格，专业难忘的名片，专业级执行，有效代表品牌标识和联系方式",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "活动邀请",
        prompt: "{prompt},Event invitation design style, visually appealing and informative invitation, professional-grade execution, effectively communicates event details, encourages attendance",
        translation: "{提示}，活动邀请函设计风格，视觉感染力强，内容丰富，专业级执行，有效传达活动细节，鼓励出席",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "网站图标",
        prompt: "{prompt},Favicon design style, isolated on white background, small and recognizable website icon, professional-grade execution, enhances brand recognition and website identity, complements overall design aesthetic",
        translation: "{提示}，Favicon的设计风格，孤立在白色背景上，小而可识别的网站图标，专业级的执行，增强品牌认知度和网站身份，补充整体设计美学",
        negative_prompt: "complex, boring, signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "传单",
        prompt: "{prompt},Flyer design style, visually appealing and informative flyer, professional-grade execution, effectively promotes an event or product, engages audience",
        translation: "{提示}，宣传单设计风格，视觉上吸引人，信息丰富，专业级执行，有效推广活动或产品，吸引受众",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "图标设计",
        prompt: "{prompt},Icon design style, visually clear and recognizable icon, professional-grade execution, effectively conveys concepts or actions, enhances user interface and experience",
        translation: "{prompt}，图标设计风格，视觉清晰可识别的图标，专业级执行，有效传达概念或动作，增强用户界面和体验",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "图标设计简单黑色",
        prompt: "{prompt},minimalist modern black icon design on solid white background, simple stylized icon, vector graphic icon, clean and minimalist vector icon, professional-grade execution, enhances visual clarity and simplicity",
        translation: "{提示}，纯白色背景上极简的现代黑色图标设计，简单的风格化图标，矢量图形图标，干净简约的矢量图标，专业级的执行，增强了视觉的清晰度和简洁性",
        negative_prompt: "complex, boring, signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "信息图表",
        prompt: "{prompt},Infographic design style, visually engaging and informative graphic, professional-grade execution, effectively communicates complex information or data, enhances understanding",
        translation: "{提示}，Infographic设计风格，视觉上引人入胜，信息丰富的图形，专业级的执行，有效地传达复杂的信息或数据，增强理解",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "信头",
        prompt: "{prompt},Letterhead design style, professional and branded letterhead, professional-grade execution, enhances brand identity and communication",
        translation: "{提示}，信头设计风格，专业品牌信头，专业级执行，增强品牌辨识度和传播力",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "Logo标志",
        prompt: "{prompt},Logo design style, custom and memorable logo, professional-grade execution, captures brand identity and values, timeless and iconic design",
        translation: "{提示}，标志设计风格，自定义和令人难忘的标志，专业级执行，捕捉品牌身份和价值观，永恒和标志性的设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "杂志版式",
        prompt: "{prompt},Magazine layout design style, visually appealing and well-organized layout, professional-grade execution, effectively showcases content and articles, enhances reader experience",
        translation: "{提示}，杂志版面设计风格，视觉上吸引人，布局有序，专业级执行，有效展示内容和文章，提升读者体验",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "菜单",
        prompt: "{prompt},Menu design style, visually appealing and informative menu, professional-grade execution, effectively presents food and beverage options, enhances dining experience",
        translation: "{提示}，菜单设计风格，视觉吸引力和信息丰富的菜单，专业级的执行，有效地呈现餐饮选择，提升用餐体验",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "包装",
        prompt: "{prompt},Packaging Design, Brand Identity, Visual Communication, Product Presentation, Consumer Appeal, structural integrity, graphic elements, brand recognition, marketing impact, professional design",
        translation: "{提示}，包装设计，品牌识别，视觉传达，产品展示，消费者诉求，结构完整性，图形元素，品牌识别，营销影响，专业设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "海报",
        prompt: "{prompt},Poster design style, poster art, visually striking and informative poster, professional-grade execution, poster graphic design",
        translation: "{提示}，招贴设计风格，招贴艺术，视觉醒目，信息丰富的招贴，专业级执行，招贴平面设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "网站",
        prompt: "{prompt},Website design style, web page, user-friendly interface, visually appealing layout, professional-grade execution, responsive design, enhances user experience and engagement",
        translation: "{提示}，网站设计风格，网页，友好的界面，视觉吸引人的布局，专业级的执行，响应式设计，增强用户体验和参与度",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "设计"
    },
    {
        name: "简单时尚",
        prompt: "{prompt},Mainstream fashion, reflects current trends and styles, easily accessible to the general public, stylish",
        translation: "{提示}，主流时尚，反映当前流行趋势和风格，通俗易懂，时尚",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "时尚"
    },
    {
        name: "沙滩装",
        prompt: "{prompt},Beachwear fashion style, designed for leisure activities and relaxation, features lightweight and breezy clothing, reflects a carefree and laid-back attitude",
        translation: "{prompt}，Beachwear时尚风格，专为休闲活动和放松而设计，以轻盈轻盈的服装为特色，体现了一种无忧无虑的悠闲态度",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "比基尼",
        prompt: "{prompt},Bikini fashion style, bikini, reflects a sense of freedom and liberation",
        translation: "{提示}，比基尼时尚的风格，比基尼，体现了一种自由和解放的感觉",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "波西米亚Boho",
        prompt: "{prompt},Boho fashion style, inspired by bohemian and hippie aesthetics, characterized by free-spirited and eclectic clothing choices, features flowing fabrics, floral prints, and ethnic-inspired details, promotes individuality and self-expression, embraces a laid-back and carefree attitude",
        translation: "{prompt}，波西米亚时尚风格，灵感来自波西米亚和嬉皮士美学，以自由奔放和不拘一格的服装选择为特征，以流动的面料、印花和民族风格的细节为特色，促进个性和自我表达，拥抱悠闲和无忧无虑的态度",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "Cosplay角色扮演",
        prompt: "{prompt},Cosplay fashion style, allows individuals to embody their favorite fictional characters, promotes creativity and craftsmanship, features elaborate costumes and accessories, celebrates diverse interests and fandoms",
        translation: "{prompt}，Cosplay时尚风格，允许个人体现他们最喜欢的虚构角色，促进创造力和工艺，特点是精心制作的服装和配件，庆祝不同的兴趣和粉丝",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "赛博朋克",
        prompt: "{prompt},Cyberpunk fashion style, inspired by futuristic dystopian settings, features high-tech and futuristic clothing, incorporates elements of technology and urban culture, promotes a bold and avant-garde aesthetic",
        translation: "{提示}，赛博朋克的时尚风格，以未来主义的反乌托邦背景为灵感，以高科技和未来主义的服装为特色，融合科技和城市文化元素，提倡大胆前卫的审美",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "EMO情绪",
        prompt: "{prompt},Emo fashion style, characterized by dark colors, layered clothing, and edgy accessories, allows individuals to express emotions and individuality, often incorporates elements of punk and gothic styles, promotes self-expression and authenticity",
        translation: "{prompt}，Emo时尚风格，以深色、分层的服装和前卫的配饰为特征，允许个人表达情感和个性，通常融合朋克和哥特式风格的元素，促进自我表达和真实性",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "魅力",
        prompt: "{prompt},Glamour fashion style, epitomizes sophistication and elegance, features luxurious fabrics like silk and satin, embellishments, promotes a polished and glamorous look, opulence and refinement",
        translation: "{提示}，魅力时尚风格，体现了复杂和优雅，以丝绸和缎子等豪华面料为特色，装饰，促进了抛光和迷人的外观，富裕和精致",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "哥特",
        prompt: "{prompt},Goth fashion style, characterized by dark and dramatic clothing choices, often includes black clothing, lace, leather, and Victorian-inspired elements, promotes a sense of mystery and theatricality, celebrates beauty in the macabre, encourages self-expression and embracing the unconventional",
        translation: "{提示}，哥特时尚风格，以黑暗和戏剧性的服装选择为特征，通常包括黑色服装，蕾丝，皮革和维多利亚风格的元素，促进神秘感和戏剧性，在恐怖中庆祝美，鼓励自我表达和拥抱非传统",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "重金属",
        prompt: "{prompt},Metalhead fashion style, inspired by heavy metal music culture, features black clothing, leather jackets, band t-shirts, and metal accessories, promotes individuality and rebellion, celebrates a love for music and expression through clothing",
        translation: "{prompt}，Metalhead时尚风格，灵感来自重金属音乐文化，以黑色服装、皮夹克、乐队t恤和金属配饰为特色，提倡个性和叛逆，颂扬对音乐的热爱，并通过服装来表达",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "简约穿搭",
        prompt: "{prompt},Normcore fashion style, embraces simplicity and everyday clothing items, focuses on comfort and practicality, promotes a minimalist and unpretentious aesthetic, encourages mixing and matching basic wardrobe staples, celebrates understated elegance and timeless style",
        translation: "{prompt}，Normcore时尚风格，拥抱简单和日常服装，注重舒适和实用性，提倡极简主义和朴实的美学，鼓励混合和匹配基本的衣柜必需品，庆祝低调的优雅和永恒的风格",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "学院风",
        prompt: "{prompt},Preppy fashion style, characterized by classic and timeless clothing choices, features tailored silhouettes, vibrant colors, and traditional patterns like plaid and stripes, promotes a polished and sophisticated look, reflects a sense of privilege and tradition associated with elite education",
        translation: "{提示}，学院风的时尚风格，以经典和永恒的服装选择为特征，以量身定制的轮廓，鲜艳的色彩和传统的图案，如格纹和条纹，促进了抛光和精致的外观，反映了与精英教育相关的特权和传统感",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "精神摇滚",
        prompt: "{prompt},Psychobilly fashion style, combines elements of rockabilly, punk, and retro influences, characterized by bold prints, vintage-inspired clothing, and edgy accessories, promotes a rebellious and retro aesthetic, encourages individuality and creativity",
        translation: "{prompt}，Psychobilly的时尚风格，结合了摇滚、朋克和复古的元素，以大胆的印花、复古风格的服装和前卫的配饰为特征，提倡叛逆和复古的审美，鼓励个性和创造力",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "狂欢",
        prompt: "{prompt},Rave fashion style, vibrant and colorful clothing choices, featuring neon colors, bold patterns, and futuristic designs, encourages self-expression and creativity, incorporates elements of dance culture and electronic music, promotes a sense of community and celebration",
        translation: "{prompt}，Rave时尚风格，充满活力和丰富多彩的服装选择，以霓虹色，大胆的图案，未来主义的设计为特色，鼓励自我表达和创造力，融合舞蹈文化和电子音乐元素，促进社区和庆祝意识",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "科幻",
        prompt: "{prompt},Sci-Fi Inspired fashion style, draws inspiration from science fiction movies, and futurism, features futuristic silhouettes,  and avant-garde designs, promotes imagination and innovation in fashion, explores concepts of technology",
        translation: "{prompt}，科幻灵感的时尚风格，从科幻电影和未来主义中汲取灵感，以未来主义的轮廓和前卫的设计为特色，促进时尚的想象力和创新，探索科技的概念",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "性感",
        prompt: "{prompt},Sexy fashion style, embraces sensuality and confidence, beauty, allure, reflects a bold and seductive attitude",
        translation: "{提示}，性感时尚的风格，拥抱性感和自信，美丽，诱惑，体现了大胆和诱人的态度",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "运动装",
        prompt: "{prompt},Sportswear fashion style, designed for athletic activities and casual wear, features comfortable and functional clothing, and performance fabrics, promotes an active lifestyle and physical fitness",
        translation: "{提示}，运动装时尚风格，专为体育活动和休闲装设计，以舒适功能性服装和性能面料为特色，提倡积极的生活方式和健身",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "蒸汽朋克",
        prompt: "{prompt},Steampunk fashion style, inspired by Victorian-era machinery and science fiction, features a mix of vintage clothing with futuristic elements, promotes creativity and craftsmanship, encourages DIY and upcycling, celebrates a love for exploration and adventure",
        translation: "{提示}，蒸汽朋克时尚风格，灵感来自维多利亚时代的机械和科幻小说，以复古服装与未来主义元素的混合为特色，促进创造力和工艺，鼓励DIY和升级回收，庆祝对探索和冒险的热爱",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "街头",
        prompt: "{prompt},Streetwear fashion style, influenced by urban culture and street fashion, features casual and comfortable clothing with bold graphics, promotes self-expression and individuality, celebrates creativity and innovation in design, reflects the diverse influences of music, art, and sports",
        translation: "{prompt}，Streetwear时尚风格，受都市文化和街头时尚的影响，以休闲舒适的服装搭配大胆的图形为特色，提倡自我表达和个性，在设计上崇尚创意和创新，体现音乐、艺术和体育的多元影响",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "复古",
        prompt: "{prompt},Vintage fashion style, embraces clothing and accessories from previous eras, celebrates timeless designs and craftsmanship, allows for unique and one-of-a-kind looks, evokes nostalgia and a sense of history",
        translation: "{提示}，复古时尚风格，包括以前时代的服装和配饰，庆祝永恒的设计和工艺，允许独特和独一无二的外观，唤起怀旧和历史感",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "冬季",
        prompt: "{prompt},Winter fashion style, designed for cold weather, features cozy and warm clothing, comfort and chicness",
        translation: "{提示}，冬季时尚款式，专为寒冷天气设计，服装舒适保暖，舒适时尚",
        negative_prompt: "signature, watermark, low quality, JPEG artifacts, off-center, deformed, cropped, worst quality",
        category: "时尚"
    },
    {
        name: "简单艺术风格",
        prompt: "{prompt},art style",
        translation: "{prompt} ，艺术风格",
        negative_prompt: "ugly, off-center, deformed, 35mm film, dslr, cropped, frame, signature, watermark, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "非洲传统",
        prompt: "{prompt},African traditional art style, bold patterns, vibrant colors, intricate designs, dynamic compositions, cultural heritage, adds richness and depth",
        translation: "{prompt} ，非洲传统艺术风格，大胆的图案，鲜艳的色彩，错综复杂的设计，充满活力的构图，文化遗产，增添了丰富性和深度",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "非洲未来主义",
        prompt: "{prompt},Afrofuturism art style, blend of African culture and aesthetics with futuristic elements, reimagines history and imagines alternative futures, black identity, creativity, and resilience",
        translation: "{prompt} ，非洲未来主义艺术风格，非洲文化和美学与未来主义元素的融合，重新想象历史，想象另类未来，黑人身份，创造力和韧性",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "古埃及壁画",
        prompt: "{prompt},Ancient Egyptian mural art style, rich cultural heritage, intricate hieroglyphics, vibrant colors, symbolic motifs, depicts scenes from mythology, religion, and daily life, monumental scale, timeless beauty",
        translation: "{prompt} ，古埃及壁画艺术风格，丰富的文化遗产，错综复杂的象形文字，鲜艳的色彩，象征性的图案，描绘了神话，宗教和日常生活的场景，巨大的规模，永恒的美丽",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "原子朋克",
        prompt: "{prompt},Atompunk art style, retro-futuristic, atomic age aesthetics, sleek and streamlined designs, nuclear energy motifs, optimism about technological progress",
        translation: "{prompt} ， Atompunk艺术风格，复古未来主义，原子时代美学，时尚流畅的设计，核能图案，对技术进步的乐观态度",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "巴洛克",
        prompt: "{prompt},Baroque art style, dynamic composition, dramatic lighting, rich colors, intricate details, professional-grade execution, captures the grandeur and theatricality of the Baroque period",
        translation: "{prompt} ，巴洛克艺术风格，动态构图，戏剧性的灯光，丰富的色彩，错综复杂的细节，专业级的执行，捕捉了巴洛克时期的宏伟和戏剧性",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "生物机械",
        prompt: "{prompt},Biomechanical art style, Biology, Machinery, Intricate, Surreal, Organic Forms, Mechanical Structures, Futuristic, Cyberpunk, Fusion, Nature, Technology",
        translation: "{prompt} ，生物力学艺术风格，生物学，机械，复杂，超现实，有机形式，机械结构，未来主义，赛博朋克，融合，自然，技术",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "生物朋克",
        prompt: "{prompt},Biopunk art style, explores genetic engineering, biohacking, and biotechnology, organic and living elements, dystopian or utopian visions of a genetically modified future",
        translation: "{prompt} ，生物朋克艺术风格，探索基因工程、生物黑客和生物技术、有机和生物元素、反乌托邦或乌托邦对转基因未来的愿景",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "拜占庭符号",
        prompt: "{prompt},Byzantine icon oil painting art style, intricate details, rich colors, religious symbolism, cultural significance, professional-grade execution, spiritual, religious",
        translation: "{prompt} ，拜占庭符号油画艺术风格，错综复杂的细节，丰富的色彩，宗教象征意义，文化意义，专业级执行，精神，宗教",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "卡通",
        prompt: "{prompt},cartoon art style, whimsical character, exaggerated features, vibrant colors, dynamic composition, expressive pose, professional-grade finish, adds humor and charm",
        translation: "{prompt} ，卡通艺术风格，异想天开的个性，夸张的特色，鲜艳的色彩，动感的构图，富有表现力的姿势，专业级的装饰，增添幽默和魅力",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "粘土动画",
        prompt: "{prompt},Claymation art style, tactile and three-dimensional character, dynamic animation, captures the charm and whimsy of stop-motion animation, suitable for various storytelling and advertising",
        translation: "{prompt} ， Claymation艺术风格，触觉和三维人物，动态动画，捕捉定格动画的魅力和奇思妙想，适合各种故事讲述和广告",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "漫画书风格",
        prompt: "{prompt},comic book art style, comics, dynamic lines, vibrant colors, expressive characters, action-packed composition, adds energy and excitement",
        translation: "{prompt} ，漫画艺术风格，漫画，动态线条，鲜艳的色彩，富有表现力的人物，动感十足的构图，增添活力和刺激",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "构成主义",
        prompt: "{prompt},Constructivism Art Style, Industrial materials, geometric abstraction, social purposes, modernity, functional art, the machine age and collective labor, fosters innovation and collaboration",
        translation: "{prompt} ，建构主义艺术风格，工业材料，几何抽象，社会目的，现代性，功能艺术，机器时代和集体劳动，促进创新和协作",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "立体主义",
        prompt: "{prompt},cubism art style, fragmented forms, geometric shapes, dynamic compositions, vibrant colors, innovative technique, cultural significance",
        translation: "{prompt} ，立体主义艺术风格，支离破碎的形式，几何形状，动态构图，鲜艳的色彩，创新技术，文化意义",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "赛博哥特艺术",
        prompt: "{prompt},Cybergoth art style, futuristic and edgy aesthetic, combines cyberpunk and gothic elements, neon colors, industrial motifs, alternative fashion and culture",
        translation: "{prompt} ， Cybergoth艺术风格，未来主义和前卫美学，结合了赛博朋克和哥特式元素、霓虹色、工业图案、另类时尚和文化",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "赛博朋克",
        prompt: "{prompt},Cyberpunk art style, futuristic cityscapes, neon-lit streets, high-tech and low-life, cybernetic enhancements, dystopian and gritty atmosphere",
        translation: "{prompt} ，赛博朋克艺术风格，未来城市景观，霓虹灯街道，高科技和低生活，控制论增强，反乌托邦和坚韧不拔的氛围",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "达达主义",
        prompt: "{prompt},Dadaism Art Style, Anti-art, absurdity, irony, spontaneity, rejecting conventional aesthetics, collage art",
        translation: "{prompt} ，达达主义艺术风格，反艺术，荒谬，讽刺，自发性，拒绝传统美学，拼贴艺术",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "黑暗学院风",
        prompt: "{prompt},Dark Academia art style, evokes the atmosphere of scholarly pursuits and literary classics, rich and moody color palettes, intricate details",
        translation: "{prompt} ，黑暗学院派艺术风格，唤起学术追求和文学经典的氛围，丰富而喜怒无常的调色板，错综复杂的细节",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "装饰艺术",
        prompt: "{prompt},Art Deco style, Symmetry, streamlined shapes, geometric patterns, luxury, modernity, glamour, sleek lines",
        translation: "{prompt} ，装饰艺术风格，对称性，流线型形状，几何图案，奢华，现代，魅力，时尚线条",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "柴油朋克",
        prompt: "{prompt},Dieselpunk art style, retro-futuristic, industrial aesthetics, mechanical marvels, alternative history, gritty and dystopian atmosphere",
        translation: "{prompt} ， Dieselpunk艺术风格，复古未来主义，工业美学，机械奇迹，另类历史，坚韧不拔的反乌托邦氛围",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "埃及",
        prompt: "{prompt},Egyptian art style, iconic symbolism, intricate hieroglyphics, dynamic composition, Egyptian cultural significance",
        translation: "{prompt} ，埃及艺术风格，标志性象征主义，错综复杂的象形文字，动态构图，埃及文化意义",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "未来主义",
        prompt: "{prompt},Futurism art style, dynamic composition, bold geometric forms, vibrant colors, captures the spirit of technological advancement and modernity",
        translation: "{prompt} ，未来主义艺术风格，动态构图，大胆的几何形状，鲜艳的色彩，捕捉技术进步和现代化的精神",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "镀金",
        prompt: "{prompt},Gilded art style, opulent, luxurious, metallic elements, divine symbolism, fine craftsmanship",
        translation: "{prompt} ，镀金艺术风格，华丽，奢华，金属元素，神圣的象征意义，精湛的工艺",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "故障",
        prompt: "{prompt},Glitch art style, embraces digital errors and glitches, distorted and fragmented imagery, experimental and abstract, challenges traditional notions of perfection and beauty",
        translation: "{prompt}，Glitch艺术风格，拥抱数字错误和故障，扭曲和碎片化的图像，实验和抽象，挑战传统的完美和美丽的概念",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "哥特",
        prompt: "{prompt},Gothic art style, gothic details, dramatic compositions, rich symbolism",
        translation: "{prompt} ，哥特式艺术风格，哥特式细节，戏剧性构图，丰富的象征意义",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "星际",
        prompt: "{prompt},Interstellar art style, Cosmic, Space, Celestial, Galactic, Nebulae, Stars, Planets, Exploration, Unknown, Infinity, Futuristic",
        translation: "{prompt} ，星际艺术风格，宇宙，太空，天体，银河系，星云，恒星，行星，探索，未知，无限，未来",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "日本传统",
        prompt: "{prompt},Japanese traditional art style, delicate lines, subtle colors, intricate details, dynamic compositions, cultural heritage, adds elegance and sophistication",
        translation: "{prompt} ，日本传统艺术风格，精致的线条，微妙的色彩，错综复杂的细节，动感的构图，文化遗产，增添了优雅和精致",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "麻胶版画",
        prompt: "{prompt},Linocut art style, relief printing, bold and graphic imagery with striking contrasts",
        translation: "{prompt}、Linocut艺术风格、浮雕印刷、醒目对比的粗体和图形图像",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "墨西哥摔跤",
        prompt: "{prompt},Lucha libre art style, dynamic and colorful compositions, exaggerated characters, captures the excitement and energy of Mexican wrestling culture",
        translation: "{prompt} ， Lucha libre艺术风格，动感和丰富多彩的构图，夸张的人物，捕捉墨西哥摔跤文化的兴奋和活力",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "玛雅",
        prompt: "{prompt},Mayan art style, rich cultural heritage, intricate geometric patterns, mayan colors,  reflects the spiritual and artistic achievements of the Maya civilization",
        translation: "{prompt} ，玛雅艺术风格，丰富的文化遗产，错综复杂的几何图案，玛雅色彩，体现了玛雅文明的精神和艺术成就",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "米诺安",
        prompt: "{prompt},Minoan art style, dynamic composition, Minoan cultural significance, adds depth and richness",
        translation: "{prompt} ，米诺斯艺术风格，动态构图，米诺斯文化意义，增添深度和丰富性",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "朴素",
        prompt: "{prompt},Naive art style, simplistic and childlike aesthetic, spontaneous and untrained, captures innocence and purity, features bold colors, exaggerated perspectives, and whimsical themes",
        translation: "{prompt} ，朴素的艺术风格，简单和儿童般的美学，自发和未经训练，捕捉纯真和纯洁，具有大胆的色彩，夸张的视角和异想天开的主题",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "死灵朋克",
        prompt: "{prompt},Necropunk art style, dark and macabre, blending of death and technology, eerie and unsettling imagery, explores themes of mortality and decay, unique and thought-provoking concepts",
        translation: "{prompt} ，《亡灵朋克》艺术风格，黑暗和恐怖，死亡与技术的融合，令人毛骨悚然和令人不安的图像，探索死亡和衰变的主题，独特而发人深省的概念",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "新艺术",
        prompt: "{prompt},Art Nouveau art style, elegant and organic forms, intricate floral motifs, flowing lines, decorative and ornate, influenced architecture, design, and visual arts in the late 19th and early 20th centuries",
        translation: "{prompt} ，新艺术风格，优雅而有机的形式，错综复杂的花卉图案，流动的线条，装饰和华丽， 19世纪末和20世纪初受影响的建筑、设计和视觉艺术",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "像素艺术",
        prompt: "{prompt},pixel art style, pixelated design, flat, uses pixelated graphics reminiscent of classic video games, charming simplicity, intricate detailing despite limited resolution",
        translation: "{prompt} ，像素艺术风格，像素化设计，平面，使用像素化图形，让人想起经典视频游戏，迷人的简约，尽管分辨率有限，但细节错综复杂",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "波普艺术",
        prompt: "{prompt},Pop art style, vibrant colors, bold outlines, use of popular culture imagery, iconic and recognizable, consumerism and mass media",
        translation: "{prompt} ，波普艺术风格，鲜艳的色彩，大胆的轮廓，使用流行文化图像，标志性和可识别，消费主义和大众媒体",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "宣传",
        prompt: "{prompt},propaganda art style, bold and persuasive imagery, dynamic compositions, serves as a powerful tool for communication and persuasion",
        translation: "{prompt} ，宣传艺术风格，大胆而有说服力的图像，动态作品，作为沟通和说服的强大工具",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "迷幻",
        prompt: "{prompt},Psychedelic art style, vibrant and surreal imagery, kaleidoscopic patterns, intense colors, mind-expanding and hallucinatory, reflects the psychedelic experience and counterculture movement",
        translation: "{prompt} ，迷幻艺术风格，充满活力和超现实的意象，万花筒图案，强烈的色彩，思想扩张和幻觉，反映了迷幻体验和反文化运动",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "洛可可",
        prompt: "{prompt},Rococo art style, ornate, light-hearted, elegant, decorative, playful subjects, asymmetrical designs",
        translation: "{prompt} ，洛可可艺术风格，华丽、轻松、优雅、装饰、俏皮的主题，不对称的设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "太阳朋克",
        prompt: "{prompt},Solarpunk art style, optimistic vision of the future, sustainable technology, renewable energy sources, lush and green landscapes, community and harmony with nature",
        translation: "{prompt} ， Solarpunk艺术风格，乐观的未来愿景，可持续技术，可再生能源，郁郁葱葱的绿色景观，社区与自然和谐相处",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "街头涂鸦艺术",
        prompt: "{prompt},Street Art, Urban setting, graffiti, murals, social messages, public spaces, anonymity, vibrant visuals",
        translation: "{prompt},街头艺术,都市环境,涂鸦,壁画,社交信息,公共空间,匿名,充满活力的视觉效果",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "街头艺术",
        prompt: "{prompt},Stencil art style, urban and contemporary, graphic and bold imagery",
        translation: "{prompt} ，模板艺术风格，都市和当代，平面和大胆的图像",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "蒸汽朋克",
        prompt: "{prompt},Steampunk art style, Victorian-era aesthetics, steam-powered machinery, brass and gears, fantastical inventions, retro-futuristic adventure",
        translation: "{prompt} ，蒸汽朋克艺术风格，维多利亚时代的美学，蒸汽动力机械，黄铜和齿轮，奇幻发明，复古未来主义冒险",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "超现实主义",
        prompt: "{prompt},Surrealism art style, dreamlike and irrational imagery, explores the unconscious mind, juxtaposition of unlikely elements, challenges reality and logic",
        translation: "{prompt} ，超现实主义艺术风格，梦幻般和非理性的意象，探索无意识的心灵，不太可能的元素的并置，挑战现实和逻辑",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "合成器浪潮",
        prompt: "{prompt},Synthwave art style, retro-futuristic aesthetic, vibrant neon colors, nostalgic 80s imagery, futuristic landscapes, nostalgic and atmospheric",
        translation: "{prompt} ， Synthwave艺术风格，复古未来主义美学，充满活力的霓虹色，怀旧的80年代图像，未来主义景观，怀旧和大气",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "乌克兰民间艺术",
        prompt: "{prompt},Ukrainian folk art style, vibrant colors, intricate patterns, dynamic compositions, traditional motifs, cultural heritage, adds richness and depth",
        translation: "{prompt} ，乌克兰民间艺术风格，鲜艳的色彩，错综复杂的图案，动感的构图，传统图案，文化遗产，增添了丰富和深度",
        negative_prompt: "signature, watermark, photo, photorealistic, realism, ugly, off-center, deformed, 35mm film, dslr, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "蒸汽波",
        prompt: "{prompt},Vaporwave art style, nostalgic and surreal aesthetic, 80s and 90s retro imagery, glitch art elements, pastel colors, dreamy and ethereal atmosphere",
        translation: "{prompt} ， Vaporwave艺术风格，怀旧和超现实的美学， 80年代和90年代的复古意象，故障艺术元素，柔和的色彩，梦幻般的空灵氛围",
        negative_prompt: "Signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "西部朋克",
        prompt: "{prompt},Westernpunk art style, fusion of Wild West and futuristic elements, rugged landscapes, cowboy aesthetics, steam-powered technology, adventurous spirit",
        translation: "{prompt} ，西方朋克艺术风格，狂野西部和未来主义元素的融合，崎岖的景观，牛仔美学，蒸汽动力技术，冒险精神",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, frame, worst quality, low quality, lowres, JPEG artifacts",
        category: "艺术3"
    },
    {
        name: "简单手工艺",
        prompt: "{prompt},Craft art style",
        translation: "{prompt} ，手工艺艺术风格",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "陶瓷",
        prompt: "{prompt},Ceramic craft style, versatile and durable, pottery and ceramic artwork, showcases creativity and craftsmanship",
        translation: "{prompt} ，陶瓷工艺风格，多功能耐用，陶器和陶瓷艺术品，展示创意和工艺",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "陶瓷 > 次布拉卡",
        prompt: "{prompt},Cibulak porcelain art style, delicate and intricately detailed porcelain creations, traditional Kazakh craftsmanship, exquisite hand-painted designs, cultural heritage preservation",
        translation: "{prompt} ， Cibulak瓷器艺术风格，精致细致的瓷器创作，哈萨克斯坦传统工艺，精美的手绘设计，文化遗产保护",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "陶瓷 > 玻璃",
        prompt: "{prompt},Ceramic glass craft style, combines ceramic and glass materials to create unique and innovative artwork, offers versatility in texture and transparency, allows for experimentation with light and color",
        translation: "{prompt} ，陶瓷玻璃工艺风格，将陶瓷和玻璃材料相结合，创造出独特而创新的艺术品，提供多种纹理和透明度，允许对光线和色彩进行实验",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "陶瓷 > 莫切",
        prompt: "{prompt},Moche craft style, ancient Peruvian civilization known for its intricate ceramic vessels and figurines, rich cultural and artistic heritage, showcases advanced craftsmanship and artistic skill",
        translation: "{prompt} ， Moche工艺风格，古老的秘鲁文明，以其错综复杂的陶瓷器皿和雕像而闻名，丰富的文化和艺术遗产，展示了先进的工艺和艺术技巧",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "陶瓷 > 瓷娃娃",
        prompt: "{prompt},Ceramic porcelain craft style, utilizes porcelain clay to create delicate and translucent artworks, smooth texture and white color, allows for intricate detailing and precise forms",
        translation: "{prompt} ，陶瓷工艺风格，利用陶瓷粘土打造精致半透明的艺术品，质地光滑，呈白色，细节精细，造型精致",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "钩针",
        prompt: "{prompt},Crochet craft style, versatile and creative, yarn",
        translation: "{prompt} ，钩编工艺风格，多功能和创意，纱线",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "钩针 > 编织玩具",
        prompt: "{prompt},Amigurumi crochet style, Japanese art, cute and whimsical designs, fosters creativity and handcrafting skills",
        translation: "{prompt} ， Amigurumi钩编风格，日本艺术，可爱而异想天开的设计，培养创造力和手工技巧",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "十字绣",
        prompt: "{prompt},Cross-stitching art style, traditional and timeless craft, precise and meticulous stitching technique, intricate and decorative piece",
        translation: "{prompt} ，十字绣艺术风格，传统和永恒的工艺，精确和细致的拼接技术，复杂和装饰性的作品",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "浮雕",
        prompt: "{prompt},Embossed art style, raised and textured surfaces, adds depth and dimension to artwork, tactile and interactive",
        translation: "{prompt} ，浮雕艺术风格，凸起和纹理表面，为艺术品增添深度和尺寸，触觉和互动",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "刺绣",
        prompt: "{prompt},Embroidery art style, decorative designs on fabric, intricate stitching techniques, adds texture and dimension to artwork",
        translation: "{prompt} ，刺绣艺术风格，面料上的装饰设计，复杂的缝合技术，为艺术品增添质感和尺寸",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "毛毡",
        prompt: "{prompt},Felt art style, tactile and textural, intricate detailing and layering",
        translation: "{prompt} ，毛毡艺术风格，触觉和纹理，错综复杂的细节和分层",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "哥布林挂毯",
        prompt: "{prompt},Gobelin tapestry art style, intricate woven designs, rich colors and textures",
        translation: "{prompt} ， Gobelin挂毯艺术风格，错综复杂的编织设计，丰富的色彩和纹理",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "纸雕",
        prompt: "{prompt},Kirigami art style, combines paper cutting with origami folding techniques, creates intricate and dynamic paper sculptures, encourages creativity and precision",
        translation: "{prompt} ， Kirigami艺术风格，将纸张切割与折纸折叠技术相结合，创造出错综复杂、充满活力的纸质雕塑，鼓励创造力和精确度",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "针织艺术",
        prompt: "{prompt},Knitting art style, fabric and patterns, intricate designs and textures",
        translation: "{prompt} ，针织艺术风格、面料和图案、错综复杂的设计和纹理",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "宝石雕刻",
        prompt: "{prompt},Lapidary art style, intricate and precise craftsmanship in cutting and polishing gemstones, creates dazzling and unique pieces of jewelry and sculpture, showcases the natural beauty of mineral",
        translation: "{prompt} ， Lapidary艺术风格，切割和抛光宝石的复杂而精确的工艺，创造出令人眼花缭乱的独特珠宝和雕塑作品，展示矿物的自然美景",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "激光雕刻木材",
        prompt: "{prompt},Laser engraving art style, precise and detailed engraving on plywood, allows for intricate designs and patterns, modern and versatile technique, flat, wood engraving art",
        translation: "{prompt} ，激光雕刻艺术风格，胶合板上精确而细致的雕刻，允许错综复杂的设计和图案，现代和多功能的技术，平面，木雕艺术",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "皮革工艺",
        prompt: "{prompt},Leatherworking art style, craftsmanship of creating designs and patterns on leather, carving, stamping, and dyeing techniques",
        translation: "{prompt} ，皮革加工艺术风格，在皮革、雕刻、冲压和染色技术上创造设计和图案的工艺",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "编结艺术",
        prompt: "{prompt},Macrame art style, uses knotting techniques to create textiles or decorative items, versatile and tactile craft, allows for intricate patterns and designs",
        translation: "{prompt} ， Macrame艺术风格，使用打结技术来制作纺织品或装饰品，多功能和触觉工艺，允许错综复杂的图案和设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "镶嵌工艺",
        prompt: "{prompt},Marquetry art style, intricate wood inlay technique, creates decorative patterns and images using veneers of different woods, showcases craftsmanship and attention to detail",
        translation: "{prompt} ，镶嵌艺术风格，复杂的木质镶嵌技术，使用不同木材的饰面创造装饰图案和图像，展示工艺和对细节的关注",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "金属工艺",
        prompt: "{prompt},Metalwork art style, manipulation of metal to create sculptures, showcases craftsmanship and technical skill, intricate and durable designs",
        translation: "{prompt} ，金属工艺艺术风格，操纵金属创作雕塑，展示工艺和技术技巧，复杂而耐用的设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "马赛克",
        prompt: "{prompt},mosaic art style, versatile and decorative, uses small pieces of tile, adds color and texture, glossy, sharp",
        translation: "{prompt} ，马赛克艺术风格，多功能和装饰性，使用小块瓷砖，增加色彩和纹理，光泽，锐利",
        negative_prompt: "worst quality, blurry, normal quality, signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts, low details, bad photo, bad photography, bad art",
        category: "手工艺"
    },
    {
        name: "马赛克 > 罗马",
        prompt: "{prompt},Roman mosaic art style, intricate and colorful mosaic designs, depict scenes from mythology, daily life, and nature, showcases superb craftsmanship and attention to detail, cultural and historical significance",
        translation: "{prompt} ，罗马马赛克艺术风格，错综复杂，色彩缤纷的马赛克设计，描绘了神话，日常生活和自然的场景，展示了精湛的工艺和对细节，文化和历史意义的关注",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "针绣",
        prompt: "{prompt},Needlepoint art style, needlepoint intricate and detailed design created through stitching, rich texture and depth, intricate patterns and color variations, fosters creativity and craftsmanship",
        translation: "{prompt} ，针尖艺术风格，针尖错综复杂的细节设计，通过缝合，丰富的纹理和深度，错综复杂的图案和色彩变化，培养创造力和工艺",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "折纸",
        prompt: "{prompt},Origami art style, traditional Japanese paper folding technique, creates intricate sculptures and designs from  paper",
        translation: "{prompt} ，折纸艺术风格，传统的日本纸张折叠技术，用纸张创作复杂的雕塑和设计",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "剪纸",
        prompt: "{prompt},minimalist Paper cut craft style, designs cut from paper, allows for detailed and delicate artwork",
        translation: "{prompt} ，简约的剪纸工艺风格，从纸上切割的设计，允许精细和精致的艺术品",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "橡皮泥",
        prompt: "{prompt},Plasticine art style, malleable and colorful modeling material, ideal for sculpting and creating 3D artwork",
        translation: "{prompt} ，塑料艺术风格，可塑性和彩色建模材料，非常适合雕刻和创作3D艺术品",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "烙画",
        prompt: "{prompt},Pyrography art style, uses heat to burn designs onto wood, creates intricate and permanent markings, showcases craftsmanship and attention to detail",
        translation: "{prompt} ，热成像艺术风格，使用热量将设计烧到木头上，创造出复杂而永久的标记，展示工艺和对细节的关注",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "拼布",
        prompt: "{prompt},Quilted art style, combines fabric and stitching to create intricate designs and patterns, reflects cultural traditions and personal stories, tactile and cozy, showcases craftsmanship and creativity",
        translation: "{prompt} ，绗缝艺术风格，将面料和缝线结合起来，创造出错综复杂的设计和图案，反映了文化传统和个人故事，触觉和舒适，展示了工艺和创造力",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "剪贴簿",
        prompt: "{prompt},Scrapbooking art style, creative arrangement of photographs, memorabilia, and decorative elements in albums or displays, preserves memories and tells stories",
        translation: "{prompt} ，绗缝艺术风格，将面料和缝线结合起来，创造出错综复杂的设计和图案，反映了文化传统和个人故事，触觉和舒适，展示了工艺和创造力",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑",
        prompt: "{prompt},Sculpture craft style, three-dimensional art form, allows for the creation of expressive and tactile works using various materials , embodies creativity and artistic vision",
        translation: "{prompt} ，雕塑工艺风格，立体艺术形式，允许使用各种材料创作富有表现力和触觉的作品，体现创意和艺术视野",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 青铜",
        prompt: "{prompt},Bronze sculpture craft style, utilizes bronze as the primary material for creating three-dimensional artworks, known for its durability and timeless beauty, allows for intricate detailing and expressive forms",
        translation: "{prompt} ，青铜雕塑工艺风格，利用青铜作为创作立体艺术品的主要材料，以其耐用性和永恒的美感而闻名，可实现复杂的细节和表现形式",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 爱波瑞吉",
        prompt: "{prompt},Alebrije sculpture style, vibrant and fantastical Mexican folk art, intricate and whimsical animal figures, handcrafted, celebrates creativity and imagination",
        translation: "{prompt} ， Alebrije雕塑风格，充满活力和幻想的墨西哥民间艺术，复杂而异想天开的动物人物，手工制作，庆祝创造力和想象力",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 浅浮雕",
        prompt: "{prompt},Bas-relief art style, sculptural technique where figures or designs are raised slightly from the background, creates depth and texture",
        translation: "{prompt} ，浅浮雕艺术风格，雕塑技巧，人物或设计从背景稍微提起，创造深度和纹理",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 粘土",
        prompt: "{prompt},Clay sculpture craft style, utilizes clay as the primary material for creating three-dimensional artworks, allows for versatile shaping and modeling technique",
        translation: "{prompt} ，粘土雕塑工艺风格，利用粘土作为创作三维艺术品的主要材料，可实现多功能成型和建模技术",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 埴轮(陪葬品)",
        prompt: "{prompt},Haniwa craft style, ancient Japanese burial sculptures, simplistic and stylized figure, cultural and historical significance, preserves traditional craftsmanship and artistry",
        translation: "{prompt} ， Haniwa工艺风格，日本古代墓葬雕塑，简约风格的人物，文化和历史意义，保留了传统工艺和艺术",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 玉",
        prompt: "{prompt},Jade sculpture craft style, utilizes jade as the primary material for creating three-dimensional artworks, esteemed for its beauty and cultural significance, allows for intricate carving and sculpting techniques",
        translation: "{prompt} ，翡翠雕塑工艺风格，利用翡翠作为创作立体艺术品的主要材料，因其美丽和文化意义而备受推崇，允许复杂的雕刻和雕刻技术",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 大理石",
        prompt: "{prompt},Marble sculpture craft style, utilizes marble as the primary material for creating three-dimensional artworks, renowned for its elegance and beauty, allows for intricate detailing and smooth finishes, timeless and enduring",
        translation: "{prompt} ，大理石雕塑工艺风格，利用大理石作为创作立体艺术品的主要材料，以其优雅和美丽而闻名，可实现精致的细节和平滑的饰面，永恒和持久",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 坠子",
        prompt: "{prompt},Netsuke craft style, traditional Japanese miniature sculpture, intricately carved and detailed, functional and decorative, reflects Japanese culture and craftsmanship",
        translation: "{prompt} ，根助工艺风格，日本传统微型雕塑，精雕细琢，实用装饰，体现日本文化和工艺",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 奥尔梅克文化",
        prompt: "{prompt},Olmec craft style, ancient Mesoamerican art tradition, iconic stone sculpture and figurine, rich cultural heritage, significant influence on subsequent civilizations",
        translation: "{prompt} ，奥尔梅克工艺风格，古老的中美洲艺术传统，标志性的石雕和雕像，丰富的文化遗产，对后来的文明产生了重大影响",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 黄金",
        prompt: "{prompt},Gold sculpture craft style, utilizes gold as the primary material for creating three-dimensional artworks, embodies luxury and opulence, allows for intricate detailing and fine craftsmanship",
        translation: "{prompt} ，黄金雕塑工艺风格，利用黄金作为创作立体艺术品的主要材料，体现奢华和富丽堂皇，允许精细的细节和精湛的工艺",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 沙子",
        prompt: "{prompt},Sand sculpture art style, temporary and ephemeral art form created by shaping and carving sand, showcases creativity and skill",
        translation: "{prompt} ，沙雕艺术风格，通过塑造和雕刻沙子创造的临时和短暂的艺术形式，展示创意和技巧",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 石头",
        prompt: "{prompt},Stone sculpture craft style, utilizes stone as the primary material for creating three-dimensional artworks, allows for intricate carving and sculpting techniques, durable and long-lasting, embodies strength and solidity",
        translation: "{prompt} ，石雕工艺风格，利用石材作为创作立体艺术品的主要材料，允许复杂的雕刻和雕刻技术，经久耐用，体现了力量和坚固性",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 木头",
        prompt: "{prompt},Wooden sculpture craft style, utilizes wood as the primary material for creating three-dimensional artworks, showcases the natural beauty and texture of wood, allows for intricate detailing and expressive forms",
        translation: "{prompt} ，木制雕塑工艺风格，利用木材作为创作立体艺术品的主要材料，展示木材的自然美景和纹理，允许错综复杂的细节和表现形式",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "雕塑 > 木雕",
        prompt: "{prompt},Wooden sculpture craft style, utilizes wood as the primary material for creating three-dimensional artworks, showcases the natural beauty and texture of wood, allows for intricate detailing and expressive forms",
        translation: "{prompt} ，木雕艺术风格，涉及雕刻木材以创造立体形态的雕塑技术，展示工艺和精确度",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "纸影盒 > 纸",
        prompt: "{prompt},3D papercut shadowbox art style, intricate paper cutting technique to create layered scenes or designs, plays with light and shadow, adds depth and dimensionality to artwork, depth, silhouette",
        translation: "{prompt} ， 3D剪纸阴影盒艺术风格，错综复杂的剪纸技术，创造分层场景或设计，玩弄光线和阴影，为艺术品增添深度和维度，深度，轮廓",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "纸影盒 > 木头",
        prompt: "{prompt},cat, 3D wood shadowbox art style, layers of wood cut and assembled to create dimensional scenes or designs, natural textures and tones, adds warmth and depth to artwork, depth, silhouette",
        translation: "{prompt}、CAT、3D木制阴影盒艺术风格、切割和组装的木材层以创造维度场景或设计、自然纹理和色调，为艺术品增添温暖和深度、深度、轮廓",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "3D层压胶合板墙艺",
        prompt: "{prompt},3D plywood laser cut, symmetrical, 3D layered wood wall art style,  stacked layers made from plywood, laser cut, on white painted wall, stacked, 3d layered, minimalist,  layered, dimensional, depth, silhouette, shadow, handmade, high contrast",
        translation: "{prompt} ， 3D胶合板激光切割，对称， 3D分层木墙艺术风格，由胶合板制成的堆叠层，激光切割，在白色涂漆墙上，堆叠， 3D分层，简约，分层，尺寸，深度，轮廓，阴影，手工制作，高对比度",
        negative_prompt: "painting, drawing, photo, 2D, flat, high detail, blurry, noisy, disfigured, complex, intricate, signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts",
        category: "手工艺"
    },
    {
        name: "彩色玻璃",
        prompt: "{prompt},Stained glass art style, vitrail, isolated on solid color background, vibrant colors, intricate patterns, luminous effects when hit by sunlight, traditional craftsmanship, flat",
        translation: "{prompt} ，彩色玻璃艺术风格，玻璃纤维，在纯色背景上隔离，色彩鲜艳，图案错综复杂，受到阳光照射时的发光效果，传统工艺，扁平",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts, 3d",
        category: "手工艺"
    },
    {
        name: "挂毯",
        prompt: "{prompt},Tapestry art style, woven textile technique, intricate designs and patterns",
        translation: "{prompt} ，挂毯艺术风格、编织纺织技术、错综复杂的设计和图案",
        negative_prompt: "signature, watermark, ugly, off-center, deformed, cropped, worst quality, low quality, lowres, JPEG artifacts, 3d",
        category: "手工艺"
    },
];