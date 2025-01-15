import { OneBotAction } from '@/onebot/action/OneBotAction';
import { ActionName } from '@/onebot/action/router';

import { napCatVersion } from '@/common/version';

export default class GetVersionInfo extends OneBotAction<any, any> {
    actionName = ActionName.GetVersionInfo;

    async _handle(payload: any): Promise<any> {
        return {
            app_name: 'NapCat.Onebot',
            protocol_version: 'v11',
            app_version: napCatVersion,
        };
    }
}
