import { IsDefined, IsOptional } from 'class-validator';
import { ISubscribersDefine, TriggerRecipientsPayload } from '@novu/shared';

import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';

export class MapTriggerRecipientsCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  recipients: TriggerRecipientsPayload;

  @IsDefined()
  transactionId: string;

  @IsOptional()
  actor?: ISubscribersDefine | null;
}
