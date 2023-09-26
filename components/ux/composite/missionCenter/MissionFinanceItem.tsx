'use client';

import React, { useEffect } from 'react';
import ShadCard from '../../element/cards/ShadCard';
import type { ExpenseSet, IncomeSet } from '@/app-store/missions/missionTypes';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { AuthData } from '@/app-store/auth/authTypes';
import ShadButton from '../../element/buttons/ShadButton';

type Props = {
  item: IncomeSet | ExpenseSet;
  key: number;
};

const MissionFinanceItem = ({ item }: Props) => {
  const { getMemberProfile, removeIncome, removeExpense } = useMissionStore();
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
    <ShadCard
      variant="noHover"
      cardDescription={timeFormattedDate}
      cardTitle={
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <span>
            {senderData?.network_rank?.abbreviation} {senderData?.in_game_name}
          </span>
          <ShadButton
            variant="destructive"
            onClick={() => {
              if (item.type === 'income') {
                removeIncome(item.id as string);
              } else {
                removeExpense(item.id as string);
              }
            }}
            styled={{
              width: '30px',
              margin: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            X
          </ShadButton>
        </div>
      }>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {item.type === 'income' && (
          <>
            <span>{item.income_label}</span>
            <h3>
              +
              {Number(item.income_amount).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </h3>
          </>
        )}
        {item.type === 'expense' && (
          <>
            <span>{item.expense_label}</span>
            <h3>
              -
              {Number(item.expense_amount).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </h3>
          </>
        )}
      </div>
    </ShadCard>
  );
};

export default MissionFinanceItem;
