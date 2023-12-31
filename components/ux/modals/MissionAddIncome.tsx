import React, { useState } from 'react';
import { IncomeSet, Mission } from '@/app-store/missions/missionTypes';
import { useModalStore } from '@/app-store/modals/modalStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';
import ShadInput from '../element/inputs/ShadInput';
import Overlay from '../element/overlays/Overlay';
import { useAuthStore } from '@/app-store/auth/authStore';
import { generateCode } from '@/app-store/utils/generateCode';

type Props = {};

const MissionAddIncomeModal = (props: Props) => {
  const { mission, updateMission, addIncome } = useMissionStore();
  const { profile } = useAuthStore();
  const [income, setIncome] = useState<IncomeSet>({} as IncomeSet);
  const { setAddIncomeModal } = useModalStore();

  const handleUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined>,
  ) => {
    setIncome((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClose = () => {
    setAddIncomeModal(false);
  };

  const handleAddIcome = () => {
    const newExpense: IncomeSet = {
      id: generateCode(2, 8),
      type: 'income',
      created_at: new Date(),
      contributer: profile?.id,
      income_amount: income.income_amount,
      income_label: income.income_label,
      has_been_paid: false,
    };
    addIncome(newExpense);
    handleClose();
  };

  return (
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        footerChildren={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
              margin: '0 auto',
            }}>
            <ShadButton
              variant="destructive"
              onClick={() => handleClose()}
              styled={{
                width: '100px',
              }}>
              Cancel
            </ShadButton>
            <ShadButton
              onClick={() => handleAddIcome()}
              styled={{
                width: '100px',
              }}>
              Save
            </ShadButton>
          </div>
        }
        styleOverride={{
          height: '40dvh',
          width: '30dvw',
          overflowY: 'auto',
        }}>
        <h2>Add Income</h2>
        <ShadCard cardTitle="Add Label">
          <ShadInput
            id="memberRole"
            inputId="income_label"
            type="text"
            value={income?.income_label}
            changeInput={(e) => handleUpdate(e)}
          />
        </ShadCard>
        <ShadCard cardTitle="Add Amount">
          <ShadInput
            defaultValue={0}
            id="memberRole"
            inputId="income_amount"
            type="number"
            value={income?.income_amount}
            changeInput={(e) => handleUpdate(e)}
          />
        </ShadCard>
      </ShadCard>
    </Overlay>
  );
};

export default MissionAddIncomeModal;
