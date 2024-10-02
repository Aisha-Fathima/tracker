export async function BalanceBoard({ activities }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="w-full h-16 border-b border-[#E4B8D4]">
          <th className="pl-8 text-[#333333] font-bold pr-6 text-left text-sm uppercase tracking-wider">
            Activity
          </th>
          <th className="text-[#333333] font-bold pr-6 text-left text-sm uppercase tracking-wider">
            Category
          </th>
          <th className="text-[#333333] font-bold pr-6 text-left text-sm uppercase tracking-wider">
            Hours
          </th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr
            key={activity.id}
            className="h-24 border-b border-[#E4B8D4] bg-[#FEE3E3] hover:bg-[#F8D9E9]" // Change to hover effect
          >
            <td className="pl-8 pr-6 text-left text-sm text-[#333333]">
              {activity.title}
            </td>
            <td className="pr-6 text-left text-sm text-[#333333]">
              {activity.category}
            </td>
            <td className="pr-6 text-left text-sm text-[#333333]">
              {activity.length}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
