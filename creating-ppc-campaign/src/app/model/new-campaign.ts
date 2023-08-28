export interface NewCampaign {
    campaignType: {
        title: string;
        description: string;
    }
    details: {
        campaignName: string;
        dailyBudget: number;
        startDate: Date;
        endDate: Date;
    };
}
