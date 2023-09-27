'use client';

import React, { useEffect, useRef } from 'react';
import ShadCard from '../../element/cards/ShadCard';
import type { ExpenseSet, IncomeSet } from '@/app-store/missions/missionTypes';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { AuthData } from '@/app-store/auth/authTypes';
import ShadButton from '../../element/buttons/ShadButton';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { useClickOutside } from '../../hooks/useClickOutside';
import MissionGroupActions from '../../modals/MissionGroupActions';
import MissionFinanceActions from '../../modals/MissionFinanceActions';
import { TbCurrencyDollarOff, TbCurrencyDollar } from 'react-icons/tb';

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
  const [localActions, setLocalActions] = React.useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useClickOutside(dropdown, () => setLocalActions(false));

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
          ref={dropdown}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}>
          <span>
            {senderData?.network_rank?.abbreviation} {senderData?.in_game_name}
          </span>
          {localActions && <MissionFinanceActions type={item?.type} item={item} close={() => setLocalActions(false)} />}
          <ShadButton
            onClick={() => setLocalActions(!localActions)}
            styled={{
              width: '30px',
              margin: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FaEllipsisVertical />
          </ShadButton>
        </div>
      }>
      <br />
      {item.type === 'income' ? <span>{item.income_label}</span> : <span>{item.expense_label}</span>}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {item.type === 'income' && (
          <>
            <h3>
              +
              {Number(item.income_amount).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </h3>
            <span
              style={{
                color: item.has_been_paid ? '#02560f' : '#660202',
              }}>
              {item.has_been_paid ? <TbCurrencyDollar /> : <TbCurrencyDollarOff />}
            </span>
          </>
        )}
        {item.type === 'expense' && (
          <>
            <h3>
              -
              {Number(item.expense_amount).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              })}
            </h3>
            <span
              style={{
                color: item.has_been_paid ? '#02560f' : '#660202',
              }}>
              {item.has_been_paid ? <TbCurrencyDollar /> : <TbCurrencyDollarOff />}
            </span>
          </>
        )}
      </div>
    </ShadCard>
  );
};

export default MissionFinanceItem;
