import { Keyword } from "./keyword";
import { Product } from "./product";
import { Stats } from "./stats";

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
    
    products: Product[];
    adGroupName: string;
    keywords: Keyword[];
    stats:Stats;
    status: string;
    
}
