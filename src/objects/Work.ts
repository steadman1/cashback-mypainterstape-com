import { Color } from './Color';

enum WorkDetailType {
    DESCRIPTION,
    DESCRIPTION_WITH_LOGO,
    DESCRIPTION_WITH_IMAGE,
    DESCRIPTION_WITH_MANY_IMAGES,
    DESCRIPTION_WITH_VIDEO,
    CALL_TO_ACTION,
}

enum WorkType {
    INTRO,
    IOSAPP,
    WEBAPP,
    DESIGN,
}

enum CallToActionType {
    CONTINUE,
    DOWNLOAD_URL_WITH_NEXT,
}

class WorkDetail {
    type: WorkDetailType;

    images: string[];

    ctaType: CallToActionType;

    title: string;
    subtitle?: string;
    description?: string;

    video?: string;

    URL?: string;

    // constructor with named arguments
    constructor(
        type: WorkDetailType,
        images: string[],
        ctaTye: CallToActionType,
        title: string,
        subtitle?: string,
        description?: string,
        video?: string,
        URL?: string,
    ) {
        this.type = type;
        this.title = title;
        this.subtitle = subtitle;
        this.ctaType = ctaTye;
        this.description = description;
        this.images = images;
        this.video = video;
        this.URL = URL;
    }
}

class Work {
    name: string;
    workType: WorkType;

    foregroundColor: Color;
    middlegroundColor: Color;
    backgroundColor: Color;

    lightAccentColor: Color;
    darkAccentColor: Color;

    primaryTextColor: Color;
    secondaryTextColor: Color;

    usesStroke: boolean;

    titleFont: string;
    subtitleFont: string;
    bodyFont: string;
    
    details: WorkDetail[];

    constructor(
        name: string,
        workType: WorkType,
        foregroundColor: Color,
        middlegroundColor: Color,
        backgroundColor: Color,
        lightAccentColor: Color,
        darkAccentColor: Color,
        primaryTextColor: Color,
        secondaryTextColor: Color,
        usesStroke: boolean,
        titleFont: string,
        subtitleFont: string,
        bodyFont: string,
        details: WorkDetail[],
    ) {
        this.name = name;
        this.workType = workType;
        this.foregroundColor = foregroundColor;
        this.middlegroundColor = middlegroundColor;
        this.backgroundColor = backgroundColor;
        this.lightAccentColor = lightAccentColor;
        this.darkAccentColor = darkAccentColor;
        this.primaryTextColor = primaryTextColor;
        this.secondaryTextColor = secondaryTextColor;
        this.usesStroke = usesStroke;
        this.titleFont = titleFont;
        this.subtitleFont = subtitleFont;
        this.bodyFont = bodyFont;
        this.details = details;
    }
    
    static cashbackWork = new Work(
        "Your Cashback",
        WorkType.IOSAPP,
        
        // Ground Colors
        new Color("#C9C9C9"),
        new Color("#F3F3F3"),
        new Color("#FFFFFF"),

        // Accent Colors
        new Color("#22C55E"),
        new Color("#C9F1D8"),

        // Text Colors
        new Color("#000000"),
        new Color("#585866"),

        // UI Stroke
        false,

        // Fonts
        "SFProDisplay-Bold",
        "SFProDisplay-Medium",
        "SFProDisplay-Medium",
        
        // Work Details
        [
            new WorkDetail(
                WorkDetailType.DESCRIPTION_WITH_LOGO,
                ["cashback/app_icon_rounded.png",],
                CallToActionType.CONTINUE,
                "Your Cashback—Your Credit Card Rewards. One Place. No Jargon.",
            ),
            new WorkDetail(
                WorkDetailType.DESCRIPTION_WITH_IMAGE,
                [
                    "cashback/0.png",
                ],
                CallToActionType.CONTINUE,
                "Maximize Your Cashback & Points",
                undefined,
                "Your Cashback is designed to help you optimize your credit card cashback and points, so you can make the most out of your spending.",
            ),
            new WorkDetail(
                WorkDetailType.DESCRIPTION_WITH_IMAGE,
                [
                    "cashback/1.png",
                ],
                CallToActionType.CONTINUE,
                "Quick Superlative Overviews",
                undefined,
                "See superlatives for each card for quick comparisons, so you can make the best decision for your spending—all in a fraction of a second.",
            ),
            new WorkDetail(
                WorkDetailType.DESCRIPTION_WITH_IMAGE,
                [
                    "cashback/2.png",
                ],
                CallToActionType.CONTINUE,
                "No Jargon—Just Your Rewards",
                undefined,
                "See all of your rewards and benefits in one place. No confusing jargon, just the information you need to make the best decision for your spending.",
            ),
            new WorkDetail(
                WorkDetailType.DESCRIPTION_WITH_IMAGE,
                [
                    "cashback/3.png",
                ],
                CallToActionType.CONTINUE,
                "Search all Cards & Rewards",
                undefined,
                "Search all of our offered cards and rewards in one place. No more searching through multiple apps or websites. Let us help you find the card that's right for you.",
            ),
            new WorkDetail(
                WorkDetailType.CALL_TO_ACTION,
                ["cashback/app_icon_rounded.png"],
                CallToActionType.DOWNLOAD_URL_WITH_NEXT,
                "Your Cashback—Maximize Rewards",
                "Find Your Best Card—Any Store",
                "Available soon to the iOS App Store!",
                undefined,
                "https://apps.apple.com/us/app/your-cashback-maximize-rewards/id6740216340",
            ),
        ]
    )
}

export { Work, WorkDetail, WorkType, WorkDetailType, CallToActionType };