"""empty message

Revision ID: 05d857a5e9da
Revises: 438957aa172e
Create Date: 2022-06-05 21:21:08.370347

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '05d857a5e9da'
down_revision = '438957aa172e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('goal_user_id_fkey', 'goal', type_='foreignkey')
    op.drop_column('goal', 'user_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('goal', sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('goal_user_id_fkey', 'goal', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###
