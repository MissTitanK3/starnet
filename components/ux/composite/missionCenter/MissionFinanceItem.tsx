'use client';

import React, { useEffect } from 'react';
import ShadCard from '../../element/cards/ShadCard';
import { IncomeSet } from '@/app-store/missions/missionTypes';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { AuthData } from '@/app-store/auth/authTypes';
import ShadButton from '../../element/buttons/ShadButton';

type Props = {
  item: IncomeSet;
  key: number;
};

const MissionFinanceItem = ({ item }: Props) => {
  const { getMemberProfile, removeIncome } = useMissionStore();
  const { timeFormattedDate } = getLoggedAndExpire({
    date: item?.created_at?.toString() || '',
  });
  const [senderData, setSenderData] = React.useState<AuthData | null>(null);

  useEffect(() => {
    const awaitSender = async () => {
      const data: any = await getMemberProfile(item?.contributer);
      setSenderData(data?.[0]);
    };
    if (item?.contributer) {
      awaitSender();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ShadCard variant="noHover">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <span>
          {senderData?.network_rank?.abbreviation} {senderData?.in_game_name}
        </span>
        <span>{timeFormattedDate}</span>
      </div>
      <div>{/* <ShadButton>X</ShadButton> */}</div>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <span>{item?.income_label}</span>
        <span>
          {Number(item?.income_amount).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </ShadCard>
  );
};

export default MissionFinanceItem;
