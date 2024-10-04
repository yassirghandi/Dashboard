export interface DashboardRhData {
    orders: {
      pending: number;
      completed: number;
    };
    revenue: {
      expenses: number;
      income: number;
    };
    customer: {
      active: number;
      registred: number;
    };
    comments: {
      new: number;
      responded: number;
    };
    fournisseurs: number;
    suppliers: number;
    cards: { title: string; value: number }[];
  }