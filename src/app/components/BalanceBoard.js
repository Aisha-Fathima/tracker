export async function BalanceBoard({ activities = [] }) {
    // Add comprehensive safety checks and debugging
    const safeActivities = Array.isArray(activities) ? activities : [];
    
    console.log("BalanceBoard received activities:", activities);
    console.log("Safe activities count:", safeActivities.length);
    
    // If no activities, show a message
    if (safeActivities.length === 0) {
        return (
            <div className="min-w-full bg-white rounded-lg border border-[#E4B8D4] p-6">
                <h3 className="text-lg font-semibold text-[#A1356E] mb-4">Activity Balance Board</h3>
                <p className="text-[#777777] text-center py-8">
                    No activities recorded yet. Add your first activity above to see it here!
                </p>
            </div>
        );
    }
    
    return (
        <div className="min-w-full bg-white rounded-lg border border-[#E4B8D4] overflow-hidden">
            <h3 className="text-lg font-semibold text-[#A1356E] p-4 border-b border-[#E4B8D4]">
                Activity Balance Board
            </h3>
            <table className="min-w-full">
                <thead>
                    <tr className="w-full h-16 border-b border-[#E4B8D4] bg-[#F8F9FA]">
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
                    {safeActivities.map((activity, index) => {
                        // Add safety checks for each activity
                        const activityId = activity?.id || `activity-${index}`;
                        const title = activity?.title || 'Untitled Activity';
                        const category = activity?.category || 'Unknown';
                        const length = activity?.length || 0;
                        
                        return (
                            <tr 
                                key={activityId} 
                                className="h-16 border-b border-[#E4B8D4] bg-[#FEE3E3] hover:bg-[#F8D9E9] transition-colors"
                            >
                                <td className="pl-8 pr-6 text-left text-sm text-[#333333] font-medium">
                                    {title}
                                </td>
                                <td className="pr-6 text-left text-sm text-[#333333] capitalize">
                                    {category === 'workin' && "Workin'"}
                                    {category === 'strivin' && "Strivin'"}
                                    {category === 'thrivin' && "Thrivin'"}
                                    {!['workin', 'strivin', 'thrivin'].includes(category) && category}
                                </td>
                                <td className="pr-6 text-left text-sm text-[#333333]">
                                    {length} {length === 1 ? 'hour' : 'hours'}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="p-4 bg-[#F8F9FA] text-xs text-[#777777]">
                Total activities: {safeActivities.length}
            </div>
        </div>
    );
}